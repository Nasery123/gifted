import { AppState } from '../AppState.js'
import { giftsService } from '../services/GiftsService.js'
import { Pop } from '../utils/Pop.js'
import { setHTML } from '../utils/Writer.js'
import { getFormData } from'../utils/FormHandler.js'


function _drawGifts(){
   console.log("the gifts are drawing")
   let template = ''
   AppState.gifts.forEach(g => {
      template += /*html*/`
      <div class="col-4 m-3">
         <div class="card p-3">
            <img src="${g.isOpened}" alt="${g.tag}" class="img-fluid img-align">
            <div class="card-body">
               <h5 class="card-title">${g.tag}</h5>
               ${g.buttonText}
            </div>
         </div>
      </div>
      `
   })
   setHTML('giftList', template)
}
export class GiftsController{
   constructor(){
      console.log('GiftsController has fired')
      this.getGifts()
      AppState.on('gifts', _drawGifts)
   }

   async getGifts(){
      try {
         await giftsService.getGifts()
         // console.log("trying to get the gift")
      } catch (error) {
         Pop.error(error)
         console.log(error)
      }
   }

   async createGift(formData){
      try{
         window.event.preventDefault();
         console.log("Form Submitting")
         const form = window.event.target;
         const formData = getFormData(form);
         await giftsService.createGift(formData);
         form.reset();
      } catch (e){
         Pop.error(e);
      }
   }
   async deleteGift(id){
      try {
         const yes = await Pop.confirm("Are you sure you would like to delete this house?");
         if(!yes){
            return
         }
         await giftsService.deleteGift(id)
      } catch (e){
         Pop.error(e);
      }
   }
   async openGift(id){
      try {
         await giftsService.openGift(id);
      } catch (error) {
         Pop.error(error)
         console.log(error)
         
      }
   }
}
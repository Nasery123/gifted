import {AppState} from "../AppState.js";
import{ api } from "./AxiosService.js";
import{Gift} from "../models/Gift.js"




class GiftsService{

   async getGifts(){
      const res = await api.get('api/gifts')
      // console.log('getting gift in the service')
      // console.log(res.data)
      AppState.gifts = res.data.map(g => new Gift(g))
      console.log('The appstateeee gift array', AppState.gifts)
   }

   
   async createGift(formData){
      const res = await api.post('api/gifts', formData)
      console.log('created gift',res)
      const newGift = new Gift(res.data)
      AppState.gifts.push(newGift)
      AppState.emit('gifts')
   }
   async deleteGift(id){
      const res = await api.delete('api/gifts/' + id)
      AppState.gifts = AppState.gifts.filter(g => g.id != id)
   }

   async openGift(id){
      const gift = AppState.gifts.find(g => g.id == id)
      gift.opened = !gift.opened
      const res = await api.put('/api/gifts' + id, gift)
      console.log("Did it work?", res.data)
   }
}

export const giftsService = new GiftsService();
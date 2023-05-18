export class Gift {
   constructor(data){
      this.id = data.id
      this.tag = data.tag
      this.url = data.url || ''
      this.opened = data.opened
      this.creatorId = data.creatorId
   }

   get isOpened(){
      if(this.opened){
         return `${this.url}`
      } else {
         return `https://cdn.shopify.com/app-store/listing_images/c40a6ffa6b00b28d4e7846f327b5f861/icon/CIri04KQlvACEAE=.png`
      }
   }

   get openButton(){
      if(!this.opened){
         return `<a href="#" id="open" class="btn btn-primary gift-btn">Open Me</a>`
      } else {
         return ``
      }
   }

   get deleteButton(){
      if(this.creatorId != AppState.account?.id){
         return ''
      }
      return /*html*/`
      <button 
      class="btn btn-danger" 
      onclick="app.GiftsController.deleteGift('${this.id}')"
      >❌</button>`
   }

   get buttonText(){
      if(!this.open){
         return `Gift Opened`
      }
      return `Open Gift`
   }

   
   // get OpenedTemplate(){
   //    return /*html*/ `
      
   //    `
   // }
   
   
   // get ClosedTemplate(){
   //    return /*html*/`
      
   //    `
   // }
}



//  this.id = data.id;
//    this.bedrooms = data.bedrooms;
//    this.bathrooms = data.bathrooms;
//    this.levels = data.levels;
//    this.imgUrl = data.imgUrl;
//    this.year = data.year;
//    this.price = data.price;
//    this.description = data.description;
//    this.creatorId = data.creatorId;
//    this.creator = data.creator;

//    "_id": "6466841fd716b57062d01379",
// "tag": "Dance time!",
// "url": "",
// "opened": false,
// "creatorId": "6392586058e304c7b7199b3b",
// "createdAt": "2023-05-18T20:01:35.466Z",
// "updatedAt": "2023-05-18T20:01:35.466Z",
// "__v": 0,
// "id": "6466841fd716b57062d01379"




<template>
    <div>
        <input type="text" v-model="name" placeholder="name">
    </div>
    <div class="textarea">
      <textarea type="textarea" v-model="comment" rows="3"></textarea>  
    </div>
    <div class="submit-button" v-if="validationOk" >
      <button @click="submitComment">Submit Comment</button>
    </div>
    <div class="message" v-else>Du måste fylla i både namn och kommentar</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        comment: "",
        name: "",
        validationOk: false
      }
    },
    methods: {
        validateInput() {
            return this.name !== "" && this.comment !== ""
        },
        async submitComment() {
        await fetch(`http://localhost:3000/comment/`, {
            method: 'POST',
         headers: {
             'Content-Type': 'application/json',
         },
            body: JSON.stringify({
                id: this.$route.params.id,
                comment: this.comment,
                name: this.name
         }),
      });
      }
    }, 
    updated() {
        this.validationOk = this.validateInput()
    }
}


  </script>
  
  <style scoped>
    .message{
        color: rgb(137, 94, 67);
        font-weight: bolder;
    }
    .list-of-ingredients {
    list-style-position: inside;
    }
    .textarea{
    margin-top: 3%;
    }
  </style>
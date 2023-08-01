const app = Vue.createApp({
    data(){
        return {
            title:"Mr",
            firstName:"John",
            lastName:"Doe",
            phone:"023456789",
            textNum:"04747384672",
            streetAddress:1935,
            postCode:80708,
            streetName:"Rua Quatro",
            img:"./img/22.jpg",
            location:"Henderson, Alabama, United States",
        }
    },
    methods:{
        renderUser(data){
            let user = data.results[0];
            this.img = user.picture.thumbnail;
            this.title = user.name.title;
            this.firstName = user.name.first;
            this.lastName = user.name.last;
            this.postCode = user.location.postcode;
            this.phone = user.phone;
            this.streetAddress = user.location.street.number;
            this.location = `${user.location.city}, ${user.location.state}, ${user.location.country}`;
            this.streetName = user.location.street.name;

        },
        getUser(){
            console.log("Eii");
            fetch("https://randomuser.me/api/")
            .then(response=>{
                (response.ok)?console.log("Successful"):console.log("Error");
                return response.json();
            })
            .then(data=>this.renderUser(data))
            .catch(error =>  alert(error))
        }
    }
});
app.mount("#app");





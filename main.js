const { createApp } = Vue;

createApp({
    data() {
        return {
            playlist: [],
            spotify_logo: "https://play-lh.googleusercontent.com/P2VMEenhpIsubG2oWbvuLGrs0GyyzLiDosGTg8bi8htRXg9Uf0eUtHiUjC28p1jgHzo",
        };
    },
    methods: {

    },

    created() {
        axios.get("http://localhost/php-dischi-json/get-disc.php")
            .then((response) => { this.playlist = response.data; });
    },
}).mount('#app');
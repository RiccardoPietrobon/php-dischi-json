const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: "", //
            playlist: [], //array che riempio con API
            albumDetails: {}, //oggetto vuoto per il singolo album
            showDetails: false,
            spotify_logo: "https://play-lh.googleusercontent.com/P2VMEenhpIsubG2oWbvuLGrs0GyyzLiDosGTg8bi8htRXg9Uf0eUtHiUjC28p1jgHzo",
        };
    },
    methods: {
        fetchDisc() { //API singolo album
            axios.get("http://localhost/php-dischi-json/get-disc.php")
                .then((response) => {
                    this.playlist = response.data;
                });
        },

        showAlbumDetails(album) {
            this.showDetails = true;
            this.albumDetails = album;
        },
    },

    created() {
        this.fetchDisc()
    },
}).mount('#app');
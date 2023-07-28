const { createApp } = Vue;
        createApp({
            data() {
                return {
                    url: "./js/technologies.json",
                    technologies: []
                }
            },
            methods: {
                fetchData(url) {
                    fetch(this.url)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data)
                            this.technologies = data.technologies;
                        })
                        .catch(error => alert("There has been an error " + error))
                },
            },
            created() {
                this.fetchData();
            },
        }).mount('#app');
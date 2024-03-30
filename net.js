// base url of the site
const api = "api_key=11d2d38bbb1b43e0beb57775395a0d00";
const base_url = "https://api.themoviedb.org/3";

const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;

// img url
const banner_url = "https://image.tmdb.org/t/p/original";

const img_url = "https://image.tmdb.org/t/p/w300";

// requests for movies data
const requests = {
    fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
    fetchReality   : `${base_url}/discover/movies?${api}&with_genres=10764`,
};

function truncate(str, n) {
    console.log("truncate fxn called")
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

// banner
fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())
    .then((data) => {
        // Check if data.results array exists and has elements
        if (data.results && data.results.length > 0) {
            // every refresh movies will be change
            const setMovie = data.results[Math.floor(Math.random() * data.results.length)];
            console.log(setMovie);
            var banner = document.getElementById("banner");
            var banner_title = document.getElementById("banner_title");
            var banner_desc = document.getElementById("banner_description");

            banner.style.backgroundImage = "url(" + banner_url + setMovie.backdrop_path + ")";
            banner_desc.innerText = truncate(setMovie.overview, 150);
            banner_title.innerText = setMovie.name;
        }
    })
    .catch((error) => {
        console.error("Error fetching Netflix originals:", error);
    });
    // movies row
fetch(requests.fetchNetflixOriginals)
.then((res)=>res.json())
.then ((data) => {
        console.log("Movie row data:- ",data)
       const headrow=document.getElementById("headrow");
       const row=document.createElement("div");
       
       row.className="row";
       row.classList.add("netflixrow");

       headrow.appendChild(row);
       if(data){
           const title=document.createElement("h2");
           title.className="row_title";
           title.innerText="NETFLIX ORIGINALS";
           row.appendChild(title);
       }
       const row_posters=document.createElement("div");
       row_posters.className = "row_posters";
       row.appendChild(row_posters);

       data.results.forEach((movie) =>{
            const poster =document.createElement("img");
            poster.className="row_posterLarge";

            var s=movie.name.replace(/\s+/g, "");

            poster.id=s;
            poster.src=img_url + movie.poster_path;
            row_posters.appendChild(poster);
       });
});

//top rated
fetch(requests.fetchTrending)
.then((res) => res.json())

.then((data) =>{
    console.log("Top rated data:- ",data)
    const headrow=document.getElementById("headrow");
    const row=document.createElement("div");
    row.className="row";
    headrow.appendChild(row);


    const title =document.createElement("h2");
    title.className="row_title";
    title.innerText="Top Rated";
    row.appendChild(title);


    const row_poster=document.createElement("div");
    row_poster.className="row_poster";
    row.appendChild(row_poster);

    data.results.forEach((movie)=>{
        console.log(movie);
        const poster=document.createElement("img");
        poster.className="row_posterLarge";
        poster.id=movie.id;
        poster.src=img_url+movie.poster_path;
        row_poster.appendChild(poster);


    });
});


//Action
fetch(requests.fetchActionMovies)
.then((res) => res.json())

.then((data) =>{
    console.log("Top rated data:- ",data)
    const headrow=document.getElementById("headrow");
    const row=document.createElement("div");
    row.className="row";
    headrow.appendChild(row);


    const title =document.createElement("h2");
    title.className="row_title";
    title.innerText="Action Movies";
    row.appendChild(title);


    const row_poster=document.createElement("div");
    row_poster.className="row_poster";
    row.appendChild(row_poster);

    data.results.forEach((movie)=>{
        console.log(movie);
        const poster=document.createElement("img");
        poster.className="row_posterLarge";
        poster.id=movie.id;
        poster.src=img_url+movie.poster_path;
        row_poster.appendChild(poster);
    });
});

//Popular
fetch(requests.fetchPopular)
.then((res) => res.json())

.then((data) =>{
    console.log("Top rated data:- ",data)
    const headrow=document.getElementById("headrow");
    const row=document.createElement("div");
    row.className="row";
    headrow.appendChild(row);


    const title =document.createElement("h2");
    title.className="row_title";
    title.innerText="Popular Movies";
    row.appendChild(title);


    const row_poster=document.createElement("div");
    row_poster.className="row_poster";
    row.appendChild(row_poster);

    data.results.forEach((movie)=>{
        console.log(movie);
        const poster=document.createElement("img");
        poster.className="row_posterLarge";
        poster.id=movie.id;
        poster.src=img_url+movie.poster_path;
        row_poster.appendChild(poster);
    });
});


//Comedy
fetch(requests.fetchComedyMovies)
.then((res) => res.json())

.then((data) =>{
    console.log("Top rated data:- ",data)
    const headrow=document.getElementById("headrow");
    const row=document.createElement("div");
    row.className="row";
    headrow.appendChild(row);


    const title =document.createElement("h2");
    title.className="row_title";
    title.innerText="Comedy Movies";
    row.appendChild(title);


    const row_poster=document.createElement("div");
    row_poster.className="row_poster";
    row.appendChild(row_poster);

    data.results.forEach((movie)=>{
        console.log(movie);
        const poster=document.createElement("img");
        poster.className="row_posterLarge";
        poster.id=movie.id;
        poster.src=img_url+movie.poster_path;
        row_poster.appendChild(poster);
    });
});


//Horror
fetch(requests.fetchHorrorMovies)
.then((res) => res.json())

.then((data) =>{
    console.log("Top rated data:- ",data)
    const headrow=document.getElementById("headrow");
    const row=document.createElement("div");
    row.className="row";
    headrow.appendChild(row);


    const title =document.createElement("h2");
    title.className="row_title";
    title.innerText="Horror Movies";
    row.appendChild(title);


    const row_poster=document.createElement("div");
    row_poster.className="row_poster";
    row.appendChild(row_poster);

    data.results.forEach((movie)=>{
        console.log(movie);
        const poster=document.createElement("img");
        poster.className="row_posterLarge";
        poster.id=movie.id;
        poster.src=img_url+movie.poster_path;
        row_poster.appendChild(poster);
    });
});


//Romance
fetch(requests.fetchRomanceMovies)
.then((res) => res.json())

.then((data) =>{
    console.log("Top rated data:- ",data)
    const headrow=document.getElementById("headrow");
    const row=document.createElement("div");
    row.className="row";
    headrow.appendChild(row);


    const title =document.createElement("h2");
    title.className="row_title";
    title.innerText="Romance Movies";
    row.appendChild(title);


    const row_poster=document.createElement("div");
    row_poster.className="row_poster";
    row.appendChild(row_poster);

    data.results.forEach((movie)=>{
        console.log(movie);
        const poster=document.createElement("img");
        poster.className="row_posterLarge";
        poster.id=movie.id;
        poster.src=img_url+movie.poster_path;
        row_poster.appendChild(poster);
    });
});


//documentaries
fetch(requests.fetchDocumentaries)
.then((res) => res.json())

.then((data) =>{
    console.log("Top rated data:- ",data)
    const headrow=document.getElementById("headrow");
    const row=document.createElement("div");
    row.className="row";
    headrow.appendChild(row);


    const title =document.createElement("h2");
    title.className="row_title";
    title.innerText="Documentaries";
    row.appendChild(title);


    const row_poster=document.createElement("div");
    row_poster.className="row_poster";
    row.appendChild(row_poster);

    data.results.forEach((movie)=>{
        console.log(movie);
        const poster=document.createElement("img");
        poster.className="row_posterLarge";
        poster.id=movie.id;
        poster.src=img_url+movie.poster_path;
        row_poster.appendChild(poster);
    });
});

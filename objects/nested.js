// representing complex structure in array

var posts = [
    {
        title: "Cats are mediocre",
        author: "Colt",
        comments: ["Awesome post", "Terrible post"]
    },
    {
        title: "Cats are actually awesome",
        author: "Car Luvr"
        comments: ["<3", "No way!"]
    }
]
// each item in the list is its own object
posts[0].title; // the title of the first article
posts[1].comments[1]; // accessing the second articles second comment

// nesting can go on for 4,5,6 layers.

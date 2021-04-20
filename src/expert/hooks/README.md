# Sfeir School : Hooks

Welcome to Sfeir School Hooks !

In order to run exercises, please run :

```shell
$ npm run start:hooks
```

This will start :

- Parcel bundling all exercises,
- API server at `localhost:1337`

## React app

This Sfeir school bundles all exercises in a single web application, so that you can check each exercise at `localhost:1234/expert/hooks/{ex-name}/index.html`

For example, to run the first exercise, just run `npm run start:hooks` and visit [http://localhost:1234/expert/hooks/ex01/index.html]()

For each exercise, the answer for previous one has been copy-pasted for you, so feel free to experiment, try and error on everything :)  
Please, also note there is a README.md recapitulating the instruction for each exercise.

Finally, `solution` folder contains one solution of all exercises. You can visit the solution at [http://localhost:1234/expert/hooks/solution/index.html]()

## API

In order to make this school easier, a simple REST API is provided.

It uses a minimal subset of [Unsplash](https://unsplash.com/) free images to run. Complete dataset can be found [here](https://unsplash.com/data).
Please note that unsplash-carousel requests the Unsplash site (by loading photos and thumbnails), so please don't abuse of this free and wonderful site :)

The server respond to two different URLs :

1. `GET /` returns a list of available images :

```
[
    {
        id: "uniqId", // Unique ID
        thumbnailUrl: "https://images.unsplash.com/photo-id", // Thumbnail URL
        details: "http://localhost:1337/{id}", // URL to fetch in order to retrieve image detail
    }
]
```

2. `GET /{id}` returns the details of the image identified by `id` :
   (please note that this url is available in `details` field of `GET /`)

```
    {
        id: "abcd", // Unique ID
        "imageUrl":  "https://images.unsplash.com/photo-id", // Image URL
        "username": "user name", // Photographer username
        "description": "Some description", // Photo Description (optional)
        "date": "2018-12-08T08:55:57.1707", // Date of the photo (ISO 8601 format)
        "views": 4324517, // Number of views
        "keywords": ["key", "words"] // Array of keywords
    }
```

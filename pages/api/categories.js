export default function handler(req, res) {
    try{
        const CollectionCategories = [
            {
                id: 0,
                CategoryName: "Artsy",
                leftImageURL: "https://picsum.photos/300/500",
                rightImageURL: "https://picsum.photos/800/400"
            },
            {
                id: 1,
                CategoryName: "Essentials",
                leftImageURL: "https://picsum.photos/300/500",
                rightImageURL: "https://picsum.photos/800/400"
            },
            {
                id: 2,
                CategoryName: "Modest Luxury",
                leftImageURL: "https://picsum.photos/300/500",
                rightImageURL: "https://picsum.photos/800/400"
            },
            {
                id: 3,
                CategoryName: "Onyx",
                leftImageURL: "https://picsum.photos/300/500",
                rightImageURL: "https://picsum.photos/800/400"
            },
            {
                id: 4,
                CategoryName: "Outdoor",
                leftImageURL: "https://picsum.photos/300/500",
                rightImageURL: "https://picsum.photos/800/400"
            },
            {
                id: 5,
                CategoryName: "Stylish",
                leftImageURL: "https://picsum.photos/300/500",
                rightImageURL: "https://picsum.photos/800/400"
            },
            {
                id: 6,
                CategoryName: "The Ultimate Black & White",
                leftImageURL: "https://picsum.photos/300/500",
                rightImageURL: "https://picsum.photos/800/400"
            },
            {
                id: 7,
                CategoryName: "category 9",
                leftImageURL: "https://picsum.photos/300/500",
                rightImageURL: "https://picsum.photos/800/400"
            },
        ]
        res.status(200).json(CollectionCategories)
    }
    catch(err){
        console.log(err);
    }
}

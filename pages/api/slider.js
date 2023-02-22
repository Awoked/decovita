export default function handler(req, res) {
    try{
        const SliderData = [
            {
                id: 0,
                imgURL: "/slider/slider-bg.png"
            },
            {
                id: 1,
                imgURL: "/slider/slider-bg.png"
            },
            {
                id: 2,
                imgURL: "/slider/slider-bg.png"
            },
        ]
        res.status(200).json(SliderData)
    }
    catch(err){
        console.log(err);
    }
}

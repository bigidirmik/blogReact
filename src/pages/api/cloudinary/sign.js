const cloudinary = require("cloudinary").v2;

export default async (_req, res) => {

    let CLOUDINARY_SECRET = "AlMGdtKHQ7BtLBskmQeiJ3Zp0Rg";

    const timestamp = Math.round(new Date().getTime()/1000);

    const signature = cloudinary.utils.api_sign_request(
        {
            timestamp:timestamp,
            // resizer // eager: "w_400,h_300,c_pad|w_260,h_200,c_crop",
            // public_id:"sample_image",
        },
        CLOUDINARY_SECRET
    )

    res.statusCode = 200;
    res.json({signature, timestamp});
}


// ImageAdd içinde en alta eklenecek (return altına)

// async function getSignature() {
//   const response = await fetch("/api/sign") // ya da "api/sign"
//   const data = await response.json();
//   const {signature, timestamp} = data;
//   return {signature,timestamp}
// }
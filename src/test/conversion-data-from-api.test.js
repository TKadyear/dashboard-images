const { conversionDataApi } = require("../components/conversion-data-from-api")

describe("Convert the data from the Unsplash Api", () => {
  const InitialState = {
    "id": "scy_C022i44",
    "created_at": "2022-04-19T11:16:30-04:00",
    "updated_at": "2022-04-21T05:24:02-04:00",
    "promoted_at": "2022-04-21T05:24:01-04:00",
    "width": 4480,
    "height": 6720,
    "color": "#262626",
    "blur_hash": "LbI=MqDi8_Rk_NRjM_ayE2Rj%LWA",
    "description": "portrait ",
    "alt_description": null,
    "urls": {
      "raw": "https://images.unsplash.com/photo-1650381381140-5bced2f6688f?ixid=MnwzMjA1MTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDUzNDc4NA\u0026ixlib=rb-1.2.1",
      "full": "https://images.unsplash.com/photo-1650381381140-5bced2f6688f?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwzMjA1MTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDUzNDc4NA\u0026ixlib=rb-1.2.1\u0026q=85",
      "regular": "https://images.unsplash.com/photo-1650381381140-5bced2f6688f?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMjA1MTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDUzNDc4NA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
      "small": "https://images.unsplash.com/photo-1650381381140-5bced2f6688f?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMjA1MTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDUzNDc4NA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
      "thumb": "https://images.unsplash.com/photo-1650381381140-5bced2f6688f?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMjA1MTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDUzNDc4NA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
      "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1650381381140-5bced2f6688f"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/scy_C022i44",
      "html": "https://unsplash.com/photos/scy_C022i44",
      "download": "https://unsplash.com/photos/scy_C022i44/download?ixid=MnwzMjA1MTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDUzNDc4NA",
      "download_location": "https://api.unsplash.com/photos/scy_C022i44/download?ixid=MnwzMjA1MTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDUzNDc4NA"
    },
    "categories": [],
    "likes": 0,
    "liked_by_user": false,
    "current_user_collections": [],
    "sponsorship": null,
    "topic_submissions": {},
    "user": {
      "id": "jsssKfFuO9Y",
      "updated_at": "2022-04-21T05:28:10-04:00",
      "username": "noellejlee",
      "name": "noelle",
      "first_name": "noelle",
      "last_name": null,
      "twitter_username": null,
      "portfolio_url": null,
      "bio": "15 - based in the bay area\r\nfeel free to check out and download my pics :) insta: noellejlphotos",
      "location": "Bay area",
      "links": {
        "html": "https://unsplash.com/@noellejlee",
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-1621379062191-725bf101e50eimage?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32",
        "medium": "https://images.unsplash.com/profile-1621379062191-725bf101e50eimage?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64",
        "large": "https://images.unsplash.com/profile-1621379062191-725bf101e50eimage?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128"
      },
      "instagram_username": "noellejlphotos",
      "total_collections": 0,
      "total_likes": 4,
      "total_photos": 203,
      "accepted_tos": true,
      "for_hire": false,
      "social": {
        "instagram_username": "noellejlphotos",
        "portfolio_url": null,
        "twitter_username": null,
        "paypal_email": null
      }
    }
  };
  test("Final data", () => {
    // ? arrange
    const expectedValue = {
      "id": "scy_C022i44",
      "width": 4480,
      "height": 6720,
      "description": "portrait ",
      "urls": {
        //... solo serían estas por lo que pone el documento
        "full": "https://images.unsplash.com/photo-1650381381140-5bced2f6688f?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwzMjA1MTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDUzNDc4NA\u0026ixlib=rb-1.2.1\u0026q=85",
        "thumb": "https://images.unsplash.com/photo-1650381381140-5bced2f6688f?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMjA1MTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDUzNDc4NA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"
      },
      "download": "https://unsplash.com/photos/scy_C022i44/download?ixid=MnwzMjA1MTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDUzNDc4NA",
      "user": {//Porque una de las Directrices de la API es basicamente dar atribución
        "username": "noellejlee",
        "name": "noelle",
        "first_name": "noelle",
        "links": {
          "html": "https://unsplash.com/@noellejlee",
        },
      },
      "categories": [],
      "likes": 0

    };
    // * act
    const actualValue = conversionDataApi(InitialState);
    // assert
    expect(actualValue).toEqual(expectedValue);
  })

})

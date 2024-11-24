import axios from "axios";

export const insert = async () => {
  const data = JSON.stringify({
    "collection": "patient",
    "database": "health_rec",
    "dataSource": "Cluster0",
    "projection": {
      "_id": 1,
      "firstName": "test"
    }
  });


  console.log("api ", process.env.NEXT_PUBLIC_MONGODB_API_KEY);
  const config = {
    url: "https://ap-south-1.aws.data.mongodb-api.com/app/data-dhyfseu/endpoint/data/v1/action/findOne",
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.NEXT_PUBLIC_MONGODB_API_KEY,
    },
    data: data
  }
  const response = await axios(config);

  console.log("response", response);
  return response;
}
const URL = "https://cdn.contentful.com/spaces/fho9ut5q5jt4/environments/master/entries?access_token=AJoEH4OEk9QKtT_Je2t2k6G3CJM4_1v8vs4M71O1MfA&content_type=triviaq";

$.ajax(URL)
  .then(data => {
    console.log(data);
  })
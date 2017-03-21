/**
 *  lagou crawler
 */

import * as rp from 'request-promise';

const dataParser = (data) => {
  try {
    let positionResult = JSON.parse(data).content.positionResult;
    let totalCount = positionResult.totalCount;
    let resultSize = positionResult.resultSize;
    let results = positionResult.result;
    return {
      totalCount,
      resultSize,
      results
    }
  } catch (error) {
    console.log(error);
  }
}

const crawlPage = async (city, kd, pn, opts = {}) => {
  try {
    let uri = `https://www.lagou.com/jobs/positionAjax.json?city=${city}&needAddtionalResult=false`;
    let options = {
      method: 'post',
      uri,
      form: {
        first: 'false',
        pn,
        kd
      },
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
        'Cookie': 'JSESSIONID=FD1EC4E22FBC690AD41D386B5C3C0B29; user_trace_token=20170321194432-3e9e6674ba2843a493a1adb6030b9579; PRE_UTM=; PRE_HOST=www.bing.com; PRE_SITE=https%3A%2F%2Fwww.bing.com%2F; PRE_LAND=https%3A%2F%2Fwww.lagou.com%2F; LGUID=20170321194432-c017b291-0e2b-11e7-954c-5254005c3644; index_location_city=%E5%8C%97%E4%BA%AC; _gat=1; SEARCH_ID=72aa83ab2d9d40bdae448da4cacd77ea; Hm_lvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1490096673,1490096903; Hm_lpvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1490096907; _ga=GA1.2.962477264.1490096673; LGSID=20170321194432-c017afa2-0e2b-11e7-954c-5254005c3644; LGRID=20170321194827-4c052583-0e2c-11e7-954c-5254005c3644; TG-TRACK-CODE=search_code'
      }
    }
    let data = await rp(options);
    // console.log(data);
    let job = dataParser(data);
    return job;
  } catch (error) {
    console.log(error);
  }
}

export default crawlPage;

// crawlPage('北京', 'nodejs', 1);

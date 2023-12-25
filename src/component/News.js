import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Drone shows smoking wreckage of Greece train crash",
    "description": "At least 32 people have died after two trains collided in northern Greece, emergency services say.",
    "url": "http://www.bbc.co.uk/news/world-europe-64808067",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6BD1/production/_128810672_p0f604cv.jpg",
    "publishedAt": "2023-03-01T06:52:15.5235674Z",
    "content": "Drone footage shows the aftermath of a deadly train crash near the city of Larissa, in northern Greece.\r\nAt least 32 people have been confirmed to have died, with dozens more injured according to eme… [+94 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Greece grapples with devastating rail collision",
    "description": "Live updates as rescue work continues at the scene of a train crash which killed more than 30.",
    "url": "http://www.bbc.co.uk/news/live/world-europe-64807384",
    "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
    "publishedAt": "2023-03-01T06:07:20.678989Z",
    "content": "Passengers who survived the crash have described the moment of impact and how they escaped the train. \r\n\"We heard a big bang,\" Stergios Minenis told Reuters news agency.\r\n\"It was a nightmarish ten se… [+497 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "LA agrees to pay Kobe Bryant widow almost $29m",
    "description": "Vanessa Bryant said first responders took photos of her late husband's remains for \"morbid gossip\".",
    "url": "http://www.bbc.co.uk/news/world-us-canada-64806905",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/180EC/production/_121204589_mediaitem121204588.jpg",
    "publishedAt": "2023-03-01T03:52:17.7421914Z",
    "content": "Los Angeles County has agreed to pay nearly $29m (£24m) to NBA superstar Kobe Bryant's widow after police shared graphic images of his fatal helicopter crash two years ago. \r\nBryant and his daughter … [+2568 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Chicago Mayor Lori Lightfoot loses re-election bid",
    "description": "She was the first black woman and the first openly gay person to serve as head of America's third-largest city.",
    "url": "http://www.bbc.co.uk/news/world-us-canada-64806760",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breaking-large-promo-nc.png",
    "publishedAt": "2023-03-01T03:22:20.4290684Z",
    "content": "The Democrat conceded defeat on Tuesday to two challengers, both Democrats, who will advance to a 4 April run-off vote."
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Bola Tinubu wins Nigeria's presidential election against Atiku Abubakar and Peter Obi",
    "description": "Bola Tinubu, 70, is declared the winner of Nigeria's election despite opposition calls for a rerun.",
    "url": "http://www.bbc.co.uk/news/world-africa-64760226",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/F73A/production/_128809236_bolareuters.jpg",
    "publishedAt": "2023-03-01T03:22:18.7263667Z",
    "content": "Ruling party candidate Bola Tinubu has been declared the winner of Nigeria's disputed presidential election.\r\nThe 70-year-old veteran politician got 36% of the vote, official results show.\r\nHis main … [+1210 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "FBI director Christopher Wray says Covid origin 'most likely' from Chinese lab",
    "description": "Christopher Wray says the FBI has \"for quite some time\" settled on a potential lab incident in Wuhan.",
    "url": "http://www.bbc.co.uk/news/world-us-canada-64806903",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15D6/production/_128809550_gettyimages-1246593257.jpg",
    "publishedAt": "2023-03-01T01:37:20.8826906Z",
    "content": "\"The FBI has for quite some time now assessed that the origins of the pandemic are most likely a potential lab incident,\" he told Fox News."
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "US Capitol riot tip-offs were ignored, government watchdog finds",
    "description": "The FBI and other agencies failed to act on \"potential violence planned for that day\", the report finds.",
    "url": "http://www.bbc.co.uk/news/world-us-canada-64806717",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5C46/production/_123222632_rioter.png",
    "publishedAt": "2023-03-01T00:37:19.0908601Z",
    "content": "Failures in processing intelligence and sharing tip-offs hampered police efforts to prevent the storming of the US Capitol in January 2021, a report by a US government watchdog has found.\r\nThe Govern… [+3070 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Donald Trump assails Rupert Murdoch over defamation testimony",
    "description": "The media mogul's emails reveal he told a Fox executive: \"We want to make Trump a non person.\"",
    "url": "http://www.bbc.co.uk/news/world-us-canada-64806437",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/139A2/production/_128809208_gettyimages-1247393711.jpg",
    "publishedAt": "2023-03-01T00:37:17.3412951Z",
    "content": "Former President Donald Trump has lashed out at Fox News owner Rupert Murdoch, accusing him of betraying Fox hosts in recent legal testimony.\r\nIn a defamation lawsuit, Mr Murdoch conceded some Fox ho… [+3392 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "JetBlue plane and Learjet involved in near miss at Boston Logan Airport",
    "description": "US air safety officials say a small jet took off without clearance as a JetBlue flight tried to land.",
    "url": "http://www.bbc.co.uk/news/world-us-canada-64805935",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/18114/production/_128808589_screenshot2023-02-28at11.44.52am.png",
    "publishedAt": "2023-02-28T21:22:18.5279993Z",
    "content": "Two planes nearly collided at Boston's Logan Airport on Monday night after one flight took off without permission, air safety officials say.\r\nThe US Federal Aviation Administration (FAA) said a JetBl… [+3097 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "US Supreme Court hears challenges on student loan forgiveness",
    "description": "The court's 6-3 conservative majority will rule on President Biden's loan forgiveness plan by June.",
    "url": "http://www.bbc.co.uk/news/world-us-canada-64802849",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/267A/production/_128805890_gettyimages-1470083538.jpg",
    "publishedAt": "2023-02-28T17:22:22.0290822Z",
    "content": "The US Supreme Court is hearing arguments in back-to-back cases that could determine the fate of more than 40 million Americans' student loans.\r\nIt comes after President Joe Biden, a Democrat, announ… [+2680 chars]"
    }
    ]
  constructor(){
    super();
    console.log('I am learning constructor')
    this.state ={
       articles : this.articles,
       loading : false
       
    }
  }
  async componentDidMount(){
    console.log("MOunt")
    let url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=57e6fbc143fe43ffbca98ac94f1f68ef";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({articles:parseData.articles})
  }
  render() {
    console.log("under the render");
    return (
      <div className='container my-2'>
        <h1>Top Headlines </h1>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4"  key={element.url}>
             <NewsItem title ={element.title} description ={element.description} imageUrl ={element.urlToImage} newsUrl ={element.url}/>
             </div>
        })}      
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" class="btn btn-dark">Dark</button>
        <button type="button" class="btn btn-dark">Dark</button>
        </div>
      </div>
    )
  }
}

export default News

import React, { Component } from 'react';
// import ArticleList from './ArticleList'
import axios from 'axios'
import TempArticleList from './TempArticleList'

const backendURL = 'http://localhost:3000'

class AdditionalNews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    this.getTopArticles()
  }

  getTopArticles() {
    axios.get(`${backendURL}/${this.props.category}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          articles: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render () {
    return (
      <div className="top-news">
        {/* <ArticleList articles={this.state.articles}/> */}
        <TempArticleList />
        <TempArticleList />
        <TempArticleList />
        <TempArticleList />
        <TempArticleList />
      </div>
    )
  }
}

export default AdditionalNews

import React, {Component } from "react";
import axios from 'axios';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Majestic Creatures.",
            isLoading: false,
            data: []
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter (item => {
                return item.category === filter;
            })
        })
    }

    getPortfolioItems() {
        axios
        .get("https://scarletsdomain.devcamp.space/portfolio/portfolio_items")
        .then(response =>  {
          this.setState({
              data: response.data.portfolio_items
          });
        })
        .catch(error => {
          console.log(error);
        });
      }

    portfolioItems(){
        

        return this.state.data.map(item => {
           
           
            return <PortfolioItem 
            key={item.id} 
            item={item}
            />;
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }


        return (
                          
                
            <div className="portfolio-items-wrapper">

                <button className="btn" onClick={() => this.handleFilter('Grizzly')}>Grizzly</button>
                <button className="btn" onClick={() => this.handleFilter('Kermode')}>Kermode</button>
                <button className="btn" onClick={() => this.handleFilter('Black')}>Black</button>
                <button className="btn" onClick={() => this.handleFilter('Sun')}>Sun</button>
                <button className="btn" onClick={() => this.handleFilter('Sloth')}>Sloth</button>
                <button className="btn" onClick={() => this.handleFilter('Polar')}>Polar</button>
                <button className="btn" onClick={() => this.handleFilter('Spectacled')}>Spectacled</button>
                <button className="btn" onClick={() => this.handleFilter('Panda')}>Panda</button>
                <button className="btn" onClick={() => this.handleFilter('Sea')}>Sea Bear</button>


                {this.portfolioItems()}
                </div>
                
            
        );
    }
}
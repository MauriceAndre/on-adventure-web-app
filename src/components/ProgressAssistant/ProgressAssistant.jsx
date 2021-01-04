import React, { Component } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';
import { join } from './../../utils/arrayUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import style from './ProgressAssistant.module.css'
import findByType from './../../utils/findByType';

const Page = () => null;

class ProgressAssistant extends Component {
    state = {
        activePage: 1,
        prevPage: 1,
        action: "next"
    }

    nextPage = () => {
        this.setState({
            ...this.state,
            activePage: this.state.activePage + 1,
            prevPage: this.state.activePage,
            action: "next"
        });
    };

    previousPage = () => {
        this.setState({
            ...this.state,
            activePage: this.state.activePage - 1,
            prevPage: this.state.activePage,
            action: "prev"
        });
    };

    renderPage() {
        const { children } = this.props;
        const { activePage } = this.state;

        const pages = findByType(children, Page, true);
        if (!pages) {
            return null;
        }

        return (
            <div className={join(style["body"])}>
                {pages[activePage -1].props.children}
            </div>
        );
    }

    render() { 
        const { activePage } = this.state;
        const { children } = this.props;
        const totalPages = children.length;

        const progress = (100 / (totalPages -1)) * (activePage -1);

        return (
            <div className={join(style["pagination"])}>
                {this.renderPage()}
                <div className={style["footer"]}>
                    <Button disabled={activePage === 1} className={join(style["btn"])} onClick={this.previousPage}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </Button>
                    <ProgressBar className="w-50" now={progress} label={`${Math.floor(progress)}%`} />
                    {activePage < totalPages ?
                        <Button className={join(style["btn"])} onClick={this.nextPage}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Button>
                        :
                        <Button className={style["btn"]}><FontAwesomeIcon icon={faFlagCheckered} /></Button>
                    }
                </div>
            </div>);
    }
}

ProgressAssistant.Page = Page;

export default ProgressAssistant;
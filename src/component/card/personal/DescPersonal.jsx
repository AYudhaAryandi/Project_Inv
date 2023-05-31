import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import "../../../assets/css/card/personal.css"

class DescPersonal extends Component {

    render() {
        return (
            <div>
                
                 <div class="image-flip" >
                    <div class="mainflip flip-0">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src={this.props.image} alt="card image"/></p>
                                    <h4 class="card-title">{this.props.name}</h4>
                                    <p class="card-text">{this.props.job}</p>
                                    <a href={this.props.link} class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">{this.props.names}</h4>
                                    <p class="card-text">{this.props.jobs}</p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href={this.props.fb}>
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href={this.props.twiter}>
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        {/* <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-skype"></i>
                                            </a>
                                        </li> */}
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href={this.props.google}>
                                                <i class="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

DescPersonal.propTypes = {

};

export default DescPersonal;
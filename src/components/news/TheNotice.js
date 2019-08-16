import './TheNotice.css';

import React from 'react';
import { Link } from 'react-router-dom';
import Imgnotice from '../../assets/img/img-notice.jpg'

export default props =>
    <Link to="/" className="lm-link-notice">
      <article className="lm-notice card">
        <div className="card-image">
            <figure className="image">
                <img src={Imgnotice} alt="Vem da Api" />
            </figure>
        </div>
        <div className="card-content">
            <div className="lm-content-news">
                <div className="lm-title-info-news">
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>

                </div>
                <div className="lm-desc-info-news">
                    <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                    </p>
                </div>
            </div>
        </div>
      </article>
    </Link>

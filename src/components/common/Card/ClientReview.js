import React from 'react';
import './ClientReview.scss';

function ClientReview({ item = {} }) {
  const { profile, review, name, job } = item;
  return (
    <div style={{ padding: '10px' }}>
      <div className="client_review_wrapper">
        <img src={profile} alt="images" className="profile_img" />
        <p className="user_review" title={review}>
          {review}
        </p>
        <p className="user_name">{name}</p>
        <p className="user_job">{job} @Apex</p>
      </div>
    </div>
  );
}

export default ClientReview;

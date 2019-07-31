import React from 'react';

const Loading = ({ loading }) => (
  <React.Fragment>
    <div class="spinner-border" role="status">
      <span class="sr-only"> {loading}</span>
    </div>

  </React.Fragment>
)
export default Loading;
import React from 'react';
import PropTypes from 'prop-types';
import IdyllDocument from 'idyll-document';

/** import the desired scss rather than specifying the css prop name
 * outlined in https://idyll-lang.org/docs/publishing/embedding */
import './layouts/blog.scss';
import './themes/blog.scss';

const IdyllContent = ({ markup, components, data }) => {
  return (
    <IdyllDocument
      markup={markup}
      components={components}
      datasets={data}
    />
  );
};

IdyllContent.propTypes = {
  /**
   * Object whose keys are React components used in the idyll markup
   * https://idyll-lang.org/docs/publishing/embedding
   */
  components: PropTypes.object.isRequired, /* eslint-disable-line react/forbid-prop-types */

  /**
   * String containing idyll markup: https://idyll-lang.org/docs/syntax
   */
  markup: PropTypes.string.isRequired,

  /** data prop type should be a single object with the following structure:
   * {
   *  myData: dataInWhateverFormatYourChartReceives,
   *  myOtherData: dataInWhateverFormatYourChartReceives,
   * }
   * Then data can be referred to in the .idyll or .idyll.md (markup) file as indicated
   * here: https://idyll-lang.org/docs/syntax#datasets
   * [data name:'myData' /]
   * [Table data:myData /]
   */
  data: PropTypes.object.isRequired, /* eslint-disable-line react/forbid-prop-types */
};

export default IdyllContent;

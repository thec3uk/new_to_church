import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Content.module.css';
import HexGrid from '../slices/hexGrid';

const Content = ({ input, className }) => {
  return input.map(content => {
    switch (content.slice_type) {
      case 'hex_grid':
        return <HexGrid key={content.id} data={content} />;
      case 'text_and_article_list':
        return (
          <div
            key={content.id}
            className={className}
            dangerouslySetInnerHTML={{ __html: content.primary.preamble.text }}
          />
        );
      case 'text1':
        return (
          <div
            key={content.id}
            className={className}
            dangerouslySetInnerHTML={{ __html: content.primary.text.text }}
          />
        );
      case 'raw_html':
        return (
          <div
            key={content.id}
            className={className}
            dangerouslySetInnerHTML={{ __html: content.primary.html.text }}
          />
        );
      case 'text':
        var sliceContent;
        if (content.primary.text.html.startsWith('<pre>&lt;')) {
          sliceContent = content.primary.text.text;
        } else {
          sliceContent = content.primary.text.html;
        }
        return (
          <div
            key={content.id}
            className={className}
            dangerouslySetInnerHTML={{ __html: sliceContent }}
          />
        );
      case 'table':
        return (
          <table key={content.id} className={styles.table}>
            <thead>
              <tr>
                {Object.values(content.primary).map(header => (
                  <th key={header.text}>{header.text}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.items.map(row => {
                return (
                  <tr key={row}>
                    {Object.values(row).map(cell => (
                      <td key={cell.text}>{cell.text}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        );
      default:
        // assume text like slice
        return (
          <div
            key={content.id}
            className={className}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        );
    }
  });
};

export default Content;

Content.propTypes = {
  input: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
};

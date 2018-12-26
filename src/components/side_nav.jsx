import React from 'react';
import PropTypes from 'prop-types';

const ChildNav = ({ title, slug }) => (
  <div className="group_nav_child">
    <a href={slug}>{title}</a>
  </div>
);

ChildNav.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  selected: PropTypes.bool,
};

const SiblingNav = ({ title, slug, selected, children }) => {
  console.log(children);
  return (
    <div className={selected ? 'group_nav_selected' : 'group_nav_sibling'}>
      <a href={slug}>{title}</a>
      {selected &&
        children.map(child => (
          <ChildNav key={child.slug} title={child.title} slug={child.slug} />
        ))}
    </div>
  );
};

SiblingNav.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  selected: PropTypes.bool,
  children: PropTypes.array,
};

const SideNav = ({ currentSlug, parent, siblings, children }) => (
  <table
    className="group-nav"
    border="0"
    width="100%"
    cellSpacing="0"
    cellPadding="0"
  >
    <tbody>
      <tr>
        <td style={{ padding: '0px 0px 0px 0px' }}>
          <table
            className="boxout_header_type_GroupNavigation_ascx boxout_header"
            width="100%"
            border="0"
            cellSpacing="0"
            cellPadding="0"
          >
            <tbody>
              <tr>
                <td className="boxout_header_left">&#160;</td>
                <td className="boxout_header_middle">
                  <a href="/">The C3 Church</a>
                </td>
                <td className="boxout_header_right">&#160;</td>
              </tr>
            </tbody>
          </table>
          <div>
            <div className="group_nav_parent">
              <a href={parent.slug}>{parent.title}</a>

              {siblings.map(sibling => (
                <SiblingNav
                  key={sibling.slug}
                  title={sibling.title}
                  slug={sibling.slug}
                  selected={sibling.slug === currentSlug}
                >
                  {children}
                </SiblingNav>
              ))}
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
);

export default SideNav;

SideNav.propTypes = {
  currentSlug: PropTypes.string,
  parent: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
  }),
  siblings: PropTypes.array,
  children: PropTypes.array,
};

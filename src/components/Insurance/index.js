import React from 'react';
import {withPlaceholder, withSitecoreContext, Text} from '@sitecore-jss/sitecore-jss-react';
import StyleguideSpecimen from '../Styleguide-Specimen';

class Insurance extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTabIndex: 0,
        };

        this.setActiveTab = this.setActiveTab.bind(this);
    }

    setActiveTab(index) {
        this.setState({activeTabIndex: index});
    }

    render() {
        const {tabsPlaceholder, sitecoreContext} = this.props;

        let validTabIndex = 0;
        const isEditing = sitecoreContext && sitecoreContext.pageEditing;

        return (
            <div>
                <ul className="nav nav-tabs">

                    {!isEditing &&
                    (tabsPlaceholder || [])
                        .filter((tab) => tab.props && tab.props.fields)
                        .map((tab, index) => (
                            <li className="nav-item" key={`tab${index}`}>
                                <a
                                    className={`nav-link ${index === this.state.activeTabIndex ? 'active' : null}`}
                                    onClick={() => this.setActiveTab(index)}
                                    href="#t"
                                >
                                    <Text field={tab.props.fields.title}/>
                                </a>
                            </li>
                        ))}
                </ul>
                <div className="p-3 border-left border-right border-bottom">
                    {(tabsPlaceholder || []).map((tab, index) => {
                        const isValid = tab.props && tab.props.fields;

                        // allow experience editor markup components to render
                        if (!isValid && isEditing) return tab;

                        validTabIndex += 1;

                        // we render the tab either if it's active - or we're editing,
                        // in which case we stack all tabs for visual editing
                        if (this.state.activeTabIndex === validTabIndex - 1 || isEditing) {
                            return tab;
                        }

                        return null;
                    })}
                </div>
            </div>
        );
    }
}


const tabsComponentWithPlaceholderInjected = withPlaceholder({
    placeholder: 'jss-tabs',
    prop: 'tabsPlaceholder',
})(Insurance);


const tabsWithPlaceholderAndSitecoreContext = withSitecoreContext()(
    tabsComponentWithPlaceholderInjected
);

export default tabsWithPlaceholderAndSitecoreContext;

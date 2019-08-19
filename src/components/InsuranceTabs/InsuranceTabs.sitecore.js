import {CommonFieldTypes, SitecoreIcon} from '@sitecore-jss/sitecore-jss-manifest';

export default function (manifest) {
    manifest.addComponent({
        name: 'InsuranceTabs',
        icon: SitecoreIcon.TabPane,
        fields: [
            {name: 'title', type: CommonFieldTypes.SingleLineText},
            {name: 'content', type: CommonFieldTypes.RichText},
        ],

    });
}

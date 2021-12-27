import React, { HTMLAttributes } from 'react';
import { IPropsTab } from './Tabs.interface';

const Tab1 = (props: IPropsTab & HTMLAttributes<HTMLDivElement>) => {
    const { activeTab, label, onClickTab, tabID } = props;
    const onClick = () => typeof onClickTab === 'function' && onClickTab(tabID);
    return (
        <div onClick={onClick} className={`tab1 ${activeTab !== tabID ? 'tab-disabled' : ''}`}>
            <p className="tab-label">{label}</p>
        </div>
    );
};

export default React.memo(Tab1);

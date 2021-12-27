import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { themeSelector } from 'src/module/Setting';
import styled from 'styled-components';
import { actionChangeTab } from './Tabs.actions';
import { IPropsTabs } from './Tabs.interface';
import { activeTabSelector } from './Tabs.selector';
import Tab from './Tabs.tab1';

const Styled = styled.div`
    &.tabs {
        .tab-list {
        }
        .tab-list .tab {
            margin-top: unset;
            flex: 1 0 auto;
            max-width: 48%;
        }
        .tab-list .tab1 {
            padding: 16px;
            border-bottom: solid 1px #ffffff;
        }

        .tab-label {
            font-style: normal;
            font-weight: 600;
            font-size: 22px;
            line-height: 30px;
            color: #ffffff;
        }
    }
`;

const Tabs = (props: IPropsTabs) => {
    const { children } = props;
    const theme = useSelector(themeSelector);
    const activeTab = useSelector(activeTabSelector);
    const dispatch = useDispatch();
    const onClickTabItem = (tab: number | string) => dispatch(actionChangeTab(tab));
    React.useEffect(() => {
        if (children) {
            dispatch(actionChangeTab(children[0].props.tabID));
        }
    }, []);
    return (
        <Styled className="tabs" theme={theme}>
            <div className="tab-list flex">
                {children.map((child) => {
                    const { label, tabID } = child.props;
                    return (
                        <Tab
                            activeTab={activeTab}
                            key={label}
                            label={label}
                            onClickTab={onClickTabItem}
                            tabID={tabID}
                        />
                    );
                })}
            </div>
            <div className="tab-content">
                {children.map((child) => {
                    if (child.props.tabID !== activeTab) return null;
                    return child.props.children;
                })}
            </div>
        </Styled>
    );
};

export default React.memo(Tabs);

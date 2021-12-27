import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
    &.top-footer {
        justify-content: space-between;
        margin: auto;
        min-height: 484px;
        padding: 0 5%;
    }
    &.top-footer .services-container {
        background: #ffffff;
        border: 1px solid #dedede;
        box-sizing: border-box;
        box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
        border-radius: 10px;
        padding: 2%;
        min-height: 228px;
        min-width: 264px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title {
            font-style: normal;
            font-weight: 700;
            font-size: 22px;
            line-height: 33px;
            letter-spacing: 0.1px;
            color: #181949;
        }
        .desc {
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 0.1px;
            color: #374754;
        }
        .price {
            font-style: normal;
            font-weight: 700;
            font-size: 36px;
            line-height: 65px;
            letter-spacing: 0.2px;
            color: #252b42;
            margin-right: 2%;
        }
        .unit {
            font-style: normal;
            font-weight: 700;
            font-size: 22px;
            line-height: 33px;
            letter-spacing: 0.1px;
            color: #252b42;
        }
        .total-time {
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 0.1px;
            color: #374754;
        }
        .hook {
        }
        .extra {
            margin-top: 5%;
        }
        &.pink-border {
            border-color: #e6367e;
        }
        &.pink-bg {
            background: #e6367e;
            border: 1px solid #dedede;
            p {
                color: #ffffff !important;
            }
        }
    }
`;

const FooterTop = () => {
    const services = React.useMemo(() => {
        return [
            {
                title: 'Free Test',
                desc: 'Organize across all apps by hand',
                price: '0',
                unit: '$',
            },
            {
                title: 'Free Test',
                desc: 'Organize across all apps by hand',
                price: '200.000',
                unit: '$',
            },
            {
                title: 'Free Test',
                desc: 'Organize across all apps by hand',
                price: '200.000',
                unit: '$',
                className: 'pink-border',
            },
            {
                title: 'Free Test',
                desc: 'Organize across all apps by hand',
                price: '300.000',
                unit: 'VND',
                className: 'pink-bg',
            },
        ];
    }, []);
    return (
        <Styled className="top-footer flex-center-horizontal">
            {services.map(({ title, desc, price, unit, className = '' }) => (
                <div key={title} className={`services-container ${className || ''}`}>
                    <p className="title">{title}</p>
                    <p className="desc">{desc}</p>
                    <div className="extra flex">
                        <p className="price">{price}</p>
                        <div className="hook">
                            <p className="unit">{unit}</p>
                            <p className="total-time">per month</p>
                        </div>
                    </div>
                </div>
            ))}
        </Styled>
    );
};

export default React.memo(FooterTop);

import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
    &.bottom-footer {
        padding: 0 5%;
        border-top: 1px solid rgba(153, 153, 153, 0.46);
        .factory-item {
            flex: 1 0 calc(100% / 3);
            max-width: calc(100% / 3);
            height: 286px;
            padding: 2%;
            border-right: 1px solid rgba(153, 153, 153, 0.46);
            :last-child {
                border-right-color: transparent;
            }
        }
        .title {
            font-style: normal;
            font-weight: 500;
            font-size: 22px;
            line-height: 30px;
            letter-spacing: -0.3px;
            color: #181949;
            margin-bottom: 20px;
        }
        .desc {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            letter-spacing: -0.204545px;
            color: #666666;
            margin-bottom: 16px;
        }
    }
`;

const FooterBottom = () => {
    const factories = [
        {
            title: 'Vietnam Office',
            decs: [
                '14F, APtower, Dien Bien Phu street, district 3, Ho Chi Minh city',
                'Business resigtration: 0315421202',
                'Tel: 028-3520-2367',
                'Copyright 2021 DaouKiwoom Innocation C0., Ltd',
            ],
        },
        {
            title: 'Indonesia Office',
            decs: [
                'Menara Mandiri II, Jl. jend. Sudirman No.54-55, South Jakarta, DKI Jakarta 12190, Indonsia',
                'Tel: +62-21-5082-0038',
            ],
        },
        {
            title: 'Korea Office',
            decs: ['5th Fl, C-dong, PDC, 242, Pangyo-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea'],
        },
    ];
    return (
        <Styled className="bottom-footer flex">
            {factories.map(({ title, decs }) => (
                <div key={title} className="factory-item">
                    <p className="title">{title}</p>
                    <div className="desc-container">
                        {decs.map((item) => (
                            <p key={item} className="desc">
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </Styled>
    );
};

export default React.memo(FooterBottom);

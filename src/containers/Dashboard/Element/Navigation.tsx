import React, {useEffect} from 'react'

import {scrolling, unScrolling} from '../scrollingJQ'
import {INavigation} from '../../../types/interfaces'

const navigation: INavigation = {
    brand: 'Исаев Аббас',
    list: [
        {title: 'Навыки', href: '#skills'},
        {title: 'Проекты', href: '#projects'},
        {title: 'Опыт', href: '#about'},
        {title: 'Контакты', href: '#contact'}
    ]
}

export const Navigation = () => {
    useEffect(() => {
        // Аналогично componentDidMount
        // Слушаем события скроллинга
        scrolling()
        return () => {
            // Аналогично componentWillUnmount
            // Отписываемся от скроллинга
            unScrolling()
        }
    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">{navigation.brand}</a>
                <button
                    className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                    Меню <i className="fas fa-bars ml-1"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto">
                        {navigation.list.map(item => <li className="nav-item" key={item.href}>
                            <a className="nav-link js-scroll-trigger" href={item.href}>{item.title}</a>
                        </li>)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
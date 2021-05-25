import React, {FC, useEffect} from 'react'
import {Button, Snackbar} from '@material-ui/core'

type Config = {
    onSuccess?: (registration: ServiceWorkerRegistration) => void
    onUpdate?: (registration: ServiceWorkerRegistration) => void
}

type Props = {
    serviceWorkerRegistration: {
        register(config?: Config): void
    }
    message?: string
}

export const ServiceWorkerWrapper: FC<Props> = (
    {
        serviceWorkerRegistration,
        message = 'Доступно обновление системы!'
    }) => {
    const [showReload, setShowReload] = React.useState(false)
    const [waitingWorker, setWaitingWorker] = React.useState<ServiceWorker | null>(null)

    const onSWUpdate = (registration: ServiceWorkerRegistration) => {
        setShowReload(true)
        setWaitingWorker(registration.waiting)
    }

    useEffect(() => {
        serviceWorkerRegistration.register({onUpdate: onSWUpdate})
    }, [serviceWorkerRegistration])

    const reloadPage = () => {
        // Отправляем сообщение, чтобы тригернуть ServiceWorker на новый
        waitingWorker?.postMessage({type: 'SKIP_WAITING'})
        setShowReload(false)
        // Перезагружаем страницу
        window.location.reload()
    }

    return (
        <Snackbar
            open={showReload}
            message={message}
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            action={
                <Button
                    color="inherit"
                    size="small"
                    onClick={reloadPage}
                >
                    Обновить
                </Button>
            }
        />
    )
}
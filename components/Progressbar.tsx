import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import styles from "../styles/Progressbar.module.scss";

export const Progressbar = ({page}:{page:String}) => {

    const progressbar = [
        {name: '재료 선택',
        page: 'material'},
        {name: '술잔 선택',
        page: 'glass'},
        {name: '이름 짓기',
        page: 'naming'}
    ]
    return(
        <div className={styles.progressbar}>
        
        {progressbar.map((a, i)=>(
            <>
                <span className={page === a.page ? styles.selected : styles.progressbar}>{a.name}</span>
                <span > {i < 2 ? '>' : null} </span>
            </>
        ))}
        </div>
    )
}

import { useRouter } from "next/router"

export default function BoardsPage(){
    const router = useRouter();
    
    return(
        <>
            <div>안녕하세요 게시판 동적페이지입니다.</div>
            <div>게시글아이디:{router.query.boardId}</div>
        </>
    ) 
}
export const getServerSideProps= () =>{
    //만약 서버사이드 렌더링을 하는 페이지 라면?? => out 폴더로 생성 불가
    //                                         => 이런경우, next.config.jsㅔㅇ서 exportPathMap으로 현재페이지 제외시키기
}
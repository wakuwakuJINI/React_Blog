export default function Sidebar(setActiveContent){
    return<>
     <div className="sidebar">
      <button onClick={() => setActiveContent('todo')}>투두리스트</button>
      <button onClick={() => setActiveContent('diary')}>하루 일기</button>
    </div>
    </>
}

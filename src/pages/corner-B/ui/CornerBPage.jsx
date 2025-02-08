import { useNavigate } from 'react-router-dom';

const CornerBPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>B Corner Page</h1>
      <button onClick={() => navigate('/payment')}>결제페이지</button>
      <button onClick={() => navigate('/review/food')}>리뷰보기</button>
    </div>
  );
};

export default CornerBPage;

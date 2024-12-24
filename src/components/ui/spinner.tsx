// components/Spinner.tsx
import { ClipLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color="#00FFFF" size={50} />
    </div>
  );
};

export default Spinner;

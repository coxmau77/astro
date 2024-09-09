// Componente básico de tarjeta
const UserCard = ({ src, title, content }) => {
  return (
    // <div className=" bg-slate-100/10 text-slate-100 border p-4 rounded-lg flex gap-4 items-center">
    //   <img
    //     className="rounded-full w-18 h-18 bg-slate-900 p-2"
    //     src={src}
    //     alt="texto alternativo"
    //   />
    //   <div>
    //     <h2>{title}</h2>
    //     <p className="text-sm">{content}</p>
    //   </div>
    // </div>

    <div className="bg-white/50 dark:bg-slate-800/70 backdrop-blur-lg text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 p-4 rounded-lg flex gap-4 items-center max-w-sm mx-auto">
      <img
        className="rounded-full w-18 h-18 bg-slate-900 p-2"
        src={src}
        alt="texto alternativo"
      />
      <div>
        <h2 className="font-semibold">{title}</h2>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
};

export default UserCard;

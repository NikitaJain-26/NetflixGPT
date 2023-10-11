const Footer = () => {
  return (
    <div className="bg-black text-gray-400 p-4">
      <p className="mb-4 w-9/12 mx-auto">Question? Call </p>
      <p className="mb-4 w-9/12 mx-auto">
        <a href="tel:000-800-919-1694">000-800-919-1694</a>
      </p>
      <ul className="flex w-9/12 mx-auto flex-wrap">
        <li className="w-4/12 mb-4">FAQ</li>
        <li className="w-4/12 mb-4">Help Center</li>
        <li className="w-4/12 mb-4">Term of use</li>
        <li className="w-4/12 mb-4">Privacy</li>
        <li className="w-4/12 mb-4">Cookie preference</li>
        <li className="w-4/12 mb-4">Corporate information</li>
      </ul>
    </div>
  );
};

export default Footer;

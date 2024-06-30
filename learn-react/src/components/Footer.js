function Footer() {
  const item = { name: "milk", cal: 100 };
  return (
    <div className="copyright">
      <p>Made with love by shubham oulkar</p>
      <p>{`${item.name} - ${item.cal} cal`}</p>
    </div>
  );
}

export default Footer;

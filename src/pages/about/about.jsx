import React from "react";
import './about.styles.scss';
import JFleuryProfile from '../../assets/jfleuryProfile.png';

const About = () => {
    return (
        <div className="aboutContainer container-fluid">
            <div className="row">
                <div className="col-12 aboutHeader">
                    <h1>What is<br />Beers on <span>Pink</span>?</h1>
                </div>
            </div>
            <div className="row p-5">
                <div className="col-12 col-md-7">
                    <h2>HOW IT STARTED</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quam est. Maxime expedita quod dignissimos laudantium sed iste odit enim cumque voluptas architecto ullam, tenetur eos hic quia sequi voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt maiores at quam excepturi totam quo provident cupiditate, veritatis incidunt, ipsum facere qui nesciunt quas odit sapiente delectus! Iusto, magnam a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatem dolorem illum impedit tenetur cumque quidem, dolorum.
                        <br /><br />
                        tempora, ipsa temporibus amet minus rem quasi id perferendis maxime expedita voluptate. Possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque officiis quas eaque ex ducimus. Rem, similique incidunt natus repudiandae assumenda minus sunt molestiae nostrum ullam doloremque dolore! Deleniti, quas rerum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus consectetur quos commodi animi, ullam explicabo enim ad praesentium provident. Totam deserunt sapiente sequi hic at nemo corrupti magnam quis dolorem.</p>
                </div>
                <div className="col-12 col-md-4 ms-auto">
                    <div className="aboutOwnerContainer px-3 mb-3">
                        <div className="ownerTextInfo">
                            <h4>Julien Fleury</h4>
                            <h4>Creator/Photographer</h4>
                        </div>
                        <div className="ownerImageContainer ms-auto me-5">
                            <img src={JFleuryProfile} alt="Julien Fleury profile" />
                        </div>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate non ab sapiente quod ex tempore sint obcaecati ut vitae, atque natus modi dicta dolorem illum quasi, mollitia molestias ratione veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga eius corrupti, neque delectus quia incidunt eveniet commodi illum nemo aspernatur sequi suscipit sint saepe consequatur quos laboriosam assumenda doloribus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil reiciendis facilis reprehenderit qui, ipsa doloribus! Doloribus, debitis accusamus? Explicabo, error consequatur? Enim voluptates incidunt reprehenderit sunt, facilis asperiores explicabo officiis?</p>
                </div>
            </div>
            <div className="row whereDoesMoneyGoContainer p-5">
                <div className="col-12">
                    <h2>WHERE DOES THE MONEY GO?</h2>
                </div>
                <div className="col-12 col-md-4 p-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ad dolores tempore aliquid quos adipisci commodi maxime nobis quidem exercitationem cupiditate, et cum alias ea iste rerum optio, maiores asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque suscipit eligendi expedita nihil corrupti consequuntur, sunt eum voluptate aliquid! Explicabo quas veniam vitae quisquam molestiae labore incidunt tempora quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit possimus unde aliquam explicabo velit earum ipsam beatae similique dignissimos ea! Hic quasi aperiam sequi fuga possimus impedit facere aut. Nostrum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae corporis aperiam ipsa obcaecati, recusandae aut quod natus? Soluta reprehenderit mollitia nostrum voluptatum nam, amet ut earum numquam assumenda ullam eius!</p>
                </div>
                <div className="col-12 col-md-4 p-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ad dolores tempore aliquid quos adipisci commodi maxime nobis quidem exercitationem cupiditate, et cum alias ea iste rerum optio, maiores asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque suscipit eligendi expedita nihil corrupti consequuntur, sunt eum voluptate aliquid! Explicabo quas veniam vitae quisquam molestiae labore incidunt tempora quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit possimus unde aliquam explicabo velit earum ipsam beatae similique dignissimos ea! Hic quasi aperiam sequi fuga possimus impedit facere aut. Nostrum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae corporis aperiam ipsa obcaecati, recusandae aut quod natus? Soluta reprehenderit mollitia nostrum voluptatum nam, amet ut earum numquam assumenda ullam eius!</p>
                </div>
                <div className="col-12 col-md-4 p-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ad dolores tempore aliquid quos adipisci commodi maxime nobis quidem exercitationem cupiditate, et cum alias ea iste rerum optio, maiores asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque suscipit eligendi expedita nihil corrupti consequuntur, sunt eum voluptate aliquid! Explicabo quas veniam vitae quisquam molestiae labore incidunt tempora quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit possimus unde aliquam explicabo velit earum ipsam beatae similique dignissimos ea! Hic quasi aperiam sequi fuga possimus impedit facere aut. Nostrum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae corporis aperiam ipsa obcaecati, recusandae aut quod natus? Soluta reprehenderit mollitia nostrum voluptatum nam, amet ut earum numquam assumenda ullam eius!</p>
                </div>
            </div>
        </div>
    );

}

export default About;
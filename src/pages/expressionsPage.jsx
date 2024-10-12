import { useEffect, useState } from "react";
import Container from "../components/common/container/Container";
import axios from "axios";
import ExpressionCard from "../components/ExpressionCard/ExpressionCard";

const ExpresionsPage = () => {
    const [expressions, setExpressions] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get("http://localhost:3000/phrases")
            .then((response) => {
                setExpressions(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching expressions:", error);
                setLoading(false);
            });
    }, []);

    return (
        <Container>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    paddingTop: "24px",
                    paddingBottom: "24px",
                }}
            >
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    expressions.map((expression) => (
                        <ExpressionCard
                            key={expression.id}
                            expression={expression}
                        />
                    ))
                )}
            </div>
            <text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                sunt qui! Modi, harum. Sunt illum voluptatem quaerat et
                perspiciatis tempora exercitationem cumque cupiditate doloremque
                ipsum fugiat aspernatur cum earum at possimus, dignissimos
                deleniti sapiente. Aliquid molestias dolor praesentium
                voluptatum nisi incidunt minima, odit autem numquam, quaerat eos
                rem blanditiis quia recusandae deserunt expedita? Ullam sequi
                nesciunt nam, omnis illum facilis excepturi voluptates libero
                incidunt corporis blanditiis rerum enim nisi consequatur
                expedita nobis nemo, facere ipsa, repudiandae magnam dolor? Sit
                a perferendis nisi voluptate autem repellat unde! Eos vel
                minima, tenetur modi natus similique quas sed ad veniam
                accusantium non doloribus autem? Minima quia reiciendis natus
                distinctio voluptates harum commodi dolor maxime ipsa, veritatis
                id quasi laudantium temporibus praesentium, doloribus autem.
                Fuga recusandae asperiores ullam tenetur in. Voluptas beatae
                reprehenderit autem deleniti voluptate neque? Dolorum officiis
                excepturi adipisci soluta vel, aliquid deleniti vitae veritatis
                harum vero laudantium quod incidunt laboriosam voluptas sit
                dolores aliquam hic ratione ex sequi cumque. Hic qui earum quos
                esse voluptas dolore numquam alias voluptatum, corporis eius quo
                consectetur vel cumque eum non praesentium rem. Cum quos
                similique deserunt. Ratione optio, beatae nesciunt doloribus,
                provident impedit eaque neque minus delectus id qui voluptatem
                odio. Itaque nesciunt voluptates libero placeat expedita?
                Deserunt eos ex tempore, ratione amet dolores similique sequi
                deleniti. Delectus laudantium corrupti aperiam impedit earum
                labore, dolorem harum atque asperiores voluptates eveniet
                perspiciatis voluptatibus, maiores, omnis ratione commodi autem
                suscipit magnam ab. Delectus consectetur adipisci provident
                inventore consequuntur beatae laboriosam et. Iure praesentium
                repellendus soluta sed sapiente fugiat. Dignissimos, hic cumque
                nemo itaque tenetur voluptate saepe. Fugit voluptatum tempora
                impedit facere id, aliquam ullam. Possimus sed dolores nihil
                aperiam quo in eum. Officia quasi cumque, dignissimos delectus
                similique dolorum tenetur unde consequuntur officiis neque alias
                ipsum obcaecati quas omnis dolores quo adipisci nostrum. Libero,
                nostrum incidunt. Veritatis voluptatibus reprehenderit ratione.
                Debitis non at voluptatum praesentium cupiditate repellat. Eius,
                cupiditate non placeat aut ut adipisci iusto id qui? Maxime non
                enim, itaque, magnam ex voluptas adipisci velit quas blanditiis
                ullam, et impedit earum cumque reiciendis vero minima
                consequatur sequi labore pariatur quia ipsum quibusdam omnis.
                Asperiores ab sit harum unde, deleniti, corrupti ipsum ad atque
                consequuntur possimus maxime amet aliquid odit reiciendis
                assumenda nihil hic rem magnam veritatis alias. Voluptatum
                obcaecati, fugit sapiente incidunt omnis delectus ut repellat
                asperiores natus perferendis, beatae voluptates quisquam,
                necessitatibus vel iste accusamus iusto voluptate vero. Iste
                minima praesentium velit? Atque ad sunt odit perspiciatis?
                Nostrum dolorum voluptas ut eaque dolorem. Voluptate, vel
                deleniti voluptatibus dolores quidem porro sit provident
                sapiente similique repudiandae officia beatae amet aliquam
                impedit obcaecati architecto corporis quos nam nobis, in commodi
                autem! Fugiat dolor dolorem, esse natus quisquam temporibus
                reprehenderit iusto optio provident rerum, atque earum animi
                vitae quod laboriosam asperiores fuga laborum sit tenetur, modi
                nobis possimus nisi? Rem, non! Aliquid vitae, molestiae officia
                adipisci aut commodi dolorem mollitia odio ipsam facilis eos
                saepe ad natus laboriosam corporis dignissimos maiores,
                consectetur quisquam eum? Doloribus rerum, sapiente obcaecati
                dolorum adipisci eos! Voluptatem aperiam accusamus assumenda
                quasi veritatis natus temporibus maiores provident hic quaerat
                consequatur nam excepturi repellendus impedit itaque quod,
                possimus, ad autem delectus qui voluptates omnis labore quia?
                Nam eum facilis ipsa quis fugit, rerum optio porro harum fugiat
                illum nesciunt molestiae minus, iste neque! Quo deserunt
                corporis rerum id illum architecto maiores modi eaque ex, neque
                necessitatibus quia quas cumque eius, ullam amet iure provident
                quidem ipsum optio labore! Nostrum cum molestiae ratione
                architecto. Ipsam eius libero tenetur laborum aspernatur cumque
                sint quos ad nesciunt. Facilis distinctio voluptas deserunt
                perspiciatis deleniti cum. Incidunt voluptatem non assumenda,
                quaerat deserunt tempora autem, sed soluta aliquam quas maxime
                fugit ullam, odit similique tempore. Debitis totam fuga illum
                magni. Eveniet magni dolorum eius velit ab sequi similique! Nemo
                neque consectetur impedit vel exercitationem facere quos
                ratione. Maxime doloremque dolor quas voluptate labore, ut magni
                rerum itaque nostrum soluta et voluptates qui aliquam deleniti
                hic id ab impedit modi ipsam quaerat molestias ullam, nobis
                blanditiis dolore? Eaque eius, eum maxime perspiciatis ab illum
                cumque quaerat distinctio totam vero esse, minima fugiat, error
                quasi! Quidem atque, optio enim tenetur dignissimos ut
                consectetur provident dolores iure quisquam? Natus quod, hic
                fugit tempora facilis veritatis optio delectus maxime minima
                possimus doloribus iure omnis harum tenetur quasi ex voluptas,
                incidunt voluptatem officia, voluptatum corporis architecto
                deserunt culpa! Magni rem, voluptas provident iste quos
                voluptatem dolore, sint consequatur suscipit voluptates iusto
                nam nisi quas saepe illum officia! Labore voluptate accusamus
                eaque provident aperiam cum consequuntur et culpa dolore
                cupiditate. Consequatur labore sed, corporis a sunt, ex nostrum
                cum perferendis magni, hic amet! Pariatur deleniti saepe minima
                voluptate blanditiis nihil eum nam possimus debitis sed magni
                quasi tempora, perferendis earum asperiores laboriosam tempore
                necessitatibus aut? Pariatur consectetur dolorum est illo,
                quidem adipisci quaerat asperiores, rerum molestias laborum,
                alias corrupti perferendis amet! Unde recusandae suscipit
                tempore perferendis, dolores assumenda soluta fugit rem ea illo
                iste quae ipsam, porro quia cumque? Autem voluptates consectetur
                officiis. Harum possimus amet dolores maiores voluptate animi
                vitae sapiente laudantium pariatur ducimus sequi, maxime dolorum
                fugiat dolore qui ex obcaecati voluptates veniam repellendus.
                Repellat rem quibusdam aut, deserunt iste, magni tempore ducimus
                totam, praesentium consequuntur nesciunt temporibus! Odit, quia
                exercitationem obcaecati vel velit totam in nulla doloremque
                natus beatae sed delectus aperiam consequuntur. Impedit, et nam
                unde delectus molestias facere, autem perspiciatis obcaecati
                perferendis sapiente ullam maiores laudantium illum amet,
                tempora dolorem reiciendis velit accusantium nobis cupiditate
                est voluptate deleniti dicta. Suscipit doloribus sit cumque nisi
                nobis! Totam sapiente eligendi deserunt vero omnis praesentium
                quam, hic numquam eos ex est quod sed quo modi odit harum aut,
                alias tempora repellendus reprehenderit itaque delectus
                voluptatum, molestias optio? Veritatis suscipit facilis
                reiciendis deleniti praesentium odio optio quaerat maxime,
                obcaecati vero quas fugiat quo tempore tenetur ea. Cum officiis
                necessitatibus similique quia ex reiciendis, unde quaerat
                adipisci veniam molestias id, suscipit voluptate corrupti
                consectetur voluptates dolores repellat earum sint mollitia
                sunt, iusto eveniet quo enim. Vel sequi eius quo? Asperiores
                ipsum porro sunt nisi voluptates? Doloribus culpa earum
                consectetur facilis molestiae, numquam est maxime voluptatibus
                nesciunt.
            </text>
        </Container>
    );
};

export default ExpresionsPage;

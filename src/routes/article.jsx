import { useRef, useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import Popup from '../lib/components/Popup';

export default function Article() {

    const pageHeaderRef = useRef()
    const [isHeaderFixed, setIsHeaderFixed] = useState(false)
    const [headerFromTop, setHeaderFromTop] = useState(null)
    const [offset, setOffset] = useState(0)
    const headerClass = "bg-light border-bottom"

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, []);

    useEffect(() => {
        if(headerFromTop !== null) {
            if(offset >= headerFromTop && !isHeaderFixed) {
                setIsHeaderFixed(true)
            } else {
                if(offset < headerFromTop && isHeaderFixed) {
                    setIsHeaderFixed(false)
                }
            }
        } else {
            const { offsetTop } = pageHeaderRef.current;
            setHeaderFromTop(offsetTop)
        }
        
    }, [offset])

    return (
        <>
            <div ref={pageHeaderRef} className={isHeaderFixed ? headerClass + " fixed-top" : headerClass}>
                <Container>
                    <div className="d-flex align-items-center py-2">
                        <h1 className="fs-3">Our most awesome article, yet!</h1>
                        <div className="ms-auto">
                            <Popup />
                        </div>
                    </div>
                </Container>
            </div>
            <div className="container my-5" style={isHeaderFixed ? {paddingTop: `${headerFromTop}px`} : {}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo, si semel tristior effectus est, hilara vita amissa est? Numquam hoc ita defendit Epicurus neque Metrodorus aut quisquam eorum, qui aut saperet aliquid aut ista didicisset. Duo Reges: constructio interrete. Non quaeritur autem quid naturae tuae consentaneum sit, sed quid disciplinae. </p>

                <ol>
                    <li>Graecum enim hunc versum nostis omnes-: Suavis laborum est praeteritorum memoria.</li>
                    <li>Quod autem meum munus dicis non equidem recuso, sed te adiungo socium.</li>
                    <li>Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus;</li>
                    <li>Qui non moveatur et offensione turpitudinis et comprobatione honestatis?</li>
                    <li>Ait enim se, si uratur, Quam hoc suave! dicturum.</li>
                    <li>Et quod est munus, quod opus sapientiae?</li>
                </ol>


                <p>An dubium est, quin virtus ita maximam partem optineat in rebus humanis, ut reliquas obruat? Sine ea igitur iucunde negat posse se vivere? Et non ex maxima parte de tota iudicabis? Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? <i>Restatis igitur vos;</i> Natura sic ab iis investigata est, ut nulla pars caelo, mari, terra, ut poëtice loquar, praetermissa sit; <mark>Rationis enim perfectio est virtus;</mark> Itaque primos congressus copulationesque et consuetudinum instituendarum voluntates fieri propter voluptatem; Sapiens autem semper beatus est et est aliquando in dolore; Verba tu fingas et ea dicas, quae non sentias? Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Non ergo Epicurus ineruditus, sed ii indocti, qui, quae pueros non didicisse turpe est, ea putant usque ad senectutem esse discenda. </p>

                <blockquote cite="http://loripsum.net">
                    Nam omnia, quae sumenda quaeque legenda aut optanda sunt, inesse debent in summa bonorum, ut is, qui eam adeptus sit, nihil praeterea desideret.
                </blockquote>


                <p><i>Erat enim Polemonis.</i> Quae dici eadem de ceteris virtutibus possunt, quarum omnium fundamenta vos in voluptate tamquam in aqua ponitis. Nondum autem explanatum satis, erat, quid maxime natura vellet. Si qua in iis corrigere voluit, deteriora fecit. At tu eadem ista dic in iudicio aut, si coronam times, dic in senatu. Nam aliquando posse recte fieri dicunt nulla expectata nec quaesita voluptate. Non pugnem cum homine, cur tantum habeat in natura boni; Peccata autem partim esse tolerabilia, partim nullo modo, propterea quod alia peccata plures, alia pauciores quasi numeros officii praeterirent. Et si turpitudinem fugimus in statu et motu corporis, quid est cur pulchritudinem non sequamur? Quod autem satis est, eo quicquid accessit, nimium est; <i>Et harum quidem rerum facilis est et expedita distinctio.</i> <i>Itaque contra est, ac dicitis;</i> Itaque illa non dico me expetere, sed legere, nec optare, sed sumere, contraria autem non fugere, sed quasi secernere. Qui autem esse poteris, nisi te amor ipse ceperit? Ego vero volo in virtute vim esse quam maximam; </p>

                <ul>
                    <li>Quia, si mala sunt, is, qui erit in iis, beatus non erit.</li>
                    <li>Sit hoc ultimum bonorum, quod nunc a me defenditur;</li>
                </ul>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ampulla enim sit necne sit, quis non iure optimo irrideatur, si laboret? Nam aliquando posse recte fieri dicunt nulla expectata nec quaesita voluptate. Sin te auctoritas commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas? An nisi populari fama? Piso igitur hoc modo, vir optimus tuique, ut scis, amantissimus. Heri, inquam, ludis commissis ex urbe profectus veni ad vesperum. Quamvis enim depravatae non sint, pravae tamen esse possunt. </p>

            <ol>
                <li>Ait enim se, si uratur, Quam hoc suave! dicturum.</li>
                <li>Magni enim aestimabat pecuniam non modo non contra leges, sed etiam legibus partam.</li>
                <li>Sint modo partes vitae beatae.</li>
                <li>Tu autem, si tibi illa probabantur, cur non propriis verbis ea tenebas?</li>
                <li>Nec enim ignoras his istud honestum non summum modo, sed etiam, ut tu vis, solum bonum videri.</li>
                <li>Fadio Gallo, cuius in testamento scriptum esset se ab eo rogatum ut omnis hereditas ad filiam perveniret.</li>
            </ol>


            <ul>
                <li>Non quam nostram quidem, inquit Pomponius iocans;</li>
                <li>Beatus autem esse in maximarum rerum timore nemo potest.</li>
                <li>Fortitudinis quaedam praecepta sunt ac paene leges, quae effeminari virum vetant in dolore.</li>
                <li>Mihi enim satis est, ipsis non satis.</li>
                <li>Quid, quod homines infima fortuna, nulla spe rerum gerendarum, opifices denique delectantur historia?</li>
                <li>Tubulum fuisse, qua illum, cuius is condemnatus est rogatione, P.</li>
            </ul>


            <p>Nec enim figura corporis nec ratio excellens ingenii humani significat ad unam hanc rem natum hominem, ut frueretur voluptatibus. -delector enim, quamquam te non possum, ut ais, corrumpere, delector, inquam, et familia vestra et nomine. Quam illa ardentis amores excitaret sui! Cur tandem? Transfer idem ad modestiam vel temperantiam, quae est moderatio cupiditatum rationi oboediens. Septem autem illi non suo, sed populorum suffragio omnium nominati sunt. Est autem eius generis actio quoque quaedam, et quidem talis, ut ratio postulet agere aliquid et facere eorum. Cuius etiam illi hortuli propinqui non memoriam solum mihi afferunt, sed ipsum videntur in conspectu meo ponere. Sive hoc difficile est, tamen nec modus est ullus investigandi veri, nisi inveneris, et quaerendi defatigatio turpis est, cum id, quod quaeritur, sit pulcherrimum. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia? Itaque dicunt nec dubitant: mihi sic usus est, tibi ut opus est facto, fac. </p>

            <p>Quod si ita se habeat, non possit beatam praestare vitam sapientia. Duo Reges: constructio interrete. Servari enim iustitia nisi a forti viro, nisi a sapiente non potest. Quem quidem vos, cum improbis poenam proponitis, inpetibilem facitis, cum sapientem semper boni plus habere vultis, tolerabilem. Quodsi ipsam honestatem undique pertectam atque absolutam. Vadem te ad mortem tyranno dabis pro amico, ut Pythagoreus ille Siculo fecit tyranno? Quid enim necesse est, tamquam meretricem in matronarum coetum, sic voluptatem in virtutum concilium adducere? Huic Epicurus praecentet, si potest, cui e viperino morsu venae viscerum Veneno inbutae taetros cruciatus cient! Sic Epicurus: Philocteta, st! brevis dolor. Quid ergo attinet dicere: Nihil haberem, quod reprehenderem, si finitas cupiditates haberent? Quid paulo ante, inquit, dixerim nonne meministi, cum omnis dolor detractus esset, variari, non augeri voluptatem? Cur ad reliquos Pythagoreos, Echecratem, Timaeum, Arionem, Locros, ut, cum Socratem expressisset, adiungeret Pythagoreorum disciplinam eaque, quae Socrates repudiabat, addisceret? Quid, si reviviscant Platonis illi et deinceps qui eorum auditores fuerunt, et tecum ita loquantur? </p>

            </div>
        </>
    );
  }
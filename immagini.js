const arPokemon = [
'./Pokemon_Dataset/abomasnow.png',
'./Pokemon_Dataset/abra.png',
'./Pokemon_Dataset/absol.png',
'./Pokemon_Dataset/accelgor.png',
'./Pokemon_Dataset/aegislash-shield.png',
'./Pokemon_Dataset/aerodactyl.png',
'./Pokemon_Dataset/aggron.png',
'./Pokemon_Dataset/aipom.png',
'./Pokemon_Dataset/alakazam.png',
'./Pokemon_Dataset/alcremie.png',
'./Pokemon_Dataset/alomomola.png',
'./Pokemon_Dataset/altaria.png',
'./Pokemon_Dataset/amaura.png',
'./Pokemon_Dataset/ambipom.png',
'./Pokemon_Dataset/amoonguss.png',
'./Pokemon_Dataset/ampharos.png',
'./Pokemon_Dataset/anorith.png',
'./Pokemon_Dataset/appletun.png',
'./Pokemon_Dataset/applin.png',
'./Pokemon_Dataset/araquanid.png',
'./Pokemon_Dataset/arbok.png',
'./Pokemon_Dataset/arcanine.png',
'./Pokemon_Dataset/arceus.png',
'./Pokemon_Dataset/archen.png',
'./Pokemon_Dataset/archeops.png',
'./Pokemon_Dataset/ariados.png',
'./Pokemon_Dataset/armaldo.png',
'./Pokemon_Dataset/aromatisse.png',
'./Pokemon_Dataset/aron.png',
'./Pokemon_Dataset/arrokuda.png',
'./Pokemon_Dataset/articuno.png',
'./Pokemon_Dataset/audino.png',
'./Pokemon_Dataset/aurorus.png',
'./Pokemon_Dataset/avalugg.png',
'./Pokemon_Dataset/axew.png',
'./Pokemon_Dataset/azelf.png',
'./Pokemon_Dataset/azumarill.png',
'./Pokemon_Dataset/azurill.png',
'./Pokemon_Dataset/bagon.png',
'./Pokemon_Dataset/baltoy.png',
'./Pokemon_Dataset/banette.png',
'./Pokemon_Dataset/barbaracle.png',
'./Pokemon_Dataset/barboach.png',
'./Pokemon_Dataset/barraskewda.png',
'./Pokemon_Dataset/basculin-red-striped.png',
'./Pokemon_Dataset/bastiodon.png',
'./Pokemon_Dataset/bayleef.png',
'./Pokemon_Dataset/beartic.png',
'./Pokemon_Dataset/beautifly.png',
'./Pokemon_Dataset/beedrill.png',
'./Pokemon_Dataset/beheeyem.png',
'./Pokemon_Dataset/beldum.png',
'./Pokemon_Dataset/bellossom.png',
'./Pokemon_Dataset/bellsprout.png',
'./Pokemon_Dataset/bergmite.png',
'./Pokemon_Dataset/bewear.png',
'./Pokemon_Dataset/bibarel.png',
'./Pokemon_Dataset/bidoof.png',
'./Pokemon_Dataset/binacle.png',
'./Pokemon_Dataset/bisharp.png',
'./Pokemon_Dataset/blacephalon.png',
'./Pokemon_Dataset/blastoise.png',
'./Pokemon_Dataset/blaziken.png',
'./Pokemon_Dataset/blipbug.png',
'./Pokemon_Dataset/blissey.png',
'./Pokemon_Dataset/blitzle.png',
'./Pokemon_Dataset/boldore.png',
'./Pokemon_Dataset/bonsly.png',
'./Pokemon_Dataset/bouffalant.png',
'./Pokemon_Dataset/bounsweet.png',
'./Pokemon_Dataset/braixen.png',
'./Pokemon_Dataset/braviary.png',
'./Pokemon_Dataset/breloom.png',
'./Pokemon_Dataset/brionne.png',
'./Pokemon_Dataset/bronzong.png',
'./Pokemon_Dataset/bronzor.png',
'./Pokemon_Dataset/bruxish.png',
'./Pokemon_Dataset/budew.png',
'./Pokemon_Dataset/buizel.png',
'./Pokemon_Dataset/bulbasaur.png',
'./Pokemon_Dataset/buneary.png',
'./Pokemon_Dataset/bunnelby.png',
'./Pokemon_Dataset/burmy-plant.png',
'./Pokemon_Dataset/butterfree.png',
'./Pokemon_Dataset/buzzwole.png',
'./Pokemon_Dataset/cacnea.png',
'./Pokemon_Dataset/cacturne.png',
'./Pokemon_Dataset/calamber.png',
'./Pokemon_Dataset/camerupt.png',
'./Pokemon_Dataset/carbink.png',
'./Pokemon_Dataset/carkol.png',
'./Pokemon_Dataset/carnivine.png',
'./Pokemon_Dataset/carracosta.png',
'./Pokemon_Dataset/carvanha.png',
'./Pokemon_Dataset/cascoon.png',
'./Pokemon_Dataset/castform.png',
'./Pokemon_Dataset/caterpie.png',
'./Pokemon_Dataset/celebi.png',
'./Pokemon_Dataset/celesteela.png',
'./Pokemon_Dataset/centiskorch.png',
'./Pokemon_Dataset/chandelure.png',
'./Pokemon_Dataset/chansey.png',
'./Pokemon_Dataset/charizard.png',
'./Pokemon_Dataset/charmander.png',
'./Pokemon_Dataset/charmeleon.png',
'./Pokemon_Dataset/chartorb.png',
'./Pokemon_Dataset/cherrim-overcast.png',
'./Pokemon_Dataset/cherubi.png',
'./Pokemon_Dataset/chesnaught.png',
'./Pokemon_Dataset/chespin.png',
'./Pokemon_Dataset/chikorita.png',
'./Pokemon_Dataset/chimchar.png',
'./Pokemon_Dataset/chimecho.png',
'./Pokemon_Dataset/chinchou.png',
'./Pokemon_Dataset/chingling.png',
'./Pokemon_Dataset/cinccino.png',
'./Pokemon_Dataset/cinderace.png',
'./Pokemon_Dataset/claydol.png',
'./Pokemon_Dataset/clefable.png',
'./Pokemon_Dataset/clefairy.png',
'./Pokemon_Dataset/cleffa.png',
'./Pokemon_Dataset/clobbopus.png',
'./Pokemon_Dataset/cloyster.png',
'./Pokemon_Dataset/cofagrigus.png',
'./Pokemon_Dataset/combee.png',
'./Pokemon_Dataset/combusken.png',
'./Pokemon_Dataset/comfey.png',
'./Pokemon_Dataset/conkeldurr.png',
'./Pokemon_Dataset/copperajah.png',
'./Pokemon_Dataset/corphish.png',
'./Pokemon_Dataset/corsola.png',
'./Pokemon_Dataset/cosmoem.png',
'./Pokemon_Dataset/cosmog.png',
'./Pokemon_Dataset/cottonee.png',
'./Pokemon_Dataset/crabominable.png',
'./Pokemon_Dataset/crabrawler.png',
'./Pokemon_Dataset/cradily.png',
'./Pokemon_Dataset/cramorant.png',
'./Pokemon_Dataset/cranidos.png',
'./Pokemon_Dataset/crawdaunt.png',
'./Pokemon_Dataset/cresselia.png',
'./Pokemon_Dataset/croagunk.png',
'./Pokemon_Dataset/crobat.png',
'./Pokemon_Dataset/croconaw.png',
'./Pokemon_Dataset/crustle.png',
'./Pokemon_Dataset/cryogonal.png',
'./Pokemon_Dataset/cubchoo.png',
'./Pokemon_Dataset/cubone.png',
'./Pokemon_Dataset/cufant.png',
'./Pokemon_Dataset/cursola.png',
'./Pokemon_Dataset/cutiefly.png',
'./Pokemon_Dataset/cyndaquil.png',
'./Pokemon_Dataset/darkrai.png',
'./Pokemon_Dataset/darmanitan-standard.png',
'./Pokemon_Dataset/dartrix.png',
'./Pokemon_Dataset/darumaka.png',
'./Pokemon_Dataset/decidueye.png',
'./Pokemon_Dataset/dedenne.png',
'./Pokemon_Dataset/deerling-spring.png',
'./Pokemon_Dataset/deino.png',
'./Pokemon_Dataset/delcatty.png',
'./Pokemon_Dataset/delibird.png',
'./Pokemon_Dataset/delphox.png',
'./Pokemon_Dataset/deoxys-normal.png',
'./Pokemon_Dataset/dewott.png',
'./Pokemon_Dataset/dewgong.png',
'./Pokemon_Dataset/dewpider.png',
'./Pokemon_Dataset/dhelmise.png',

'./Pokemon_Dataset/dialga.png',
'./Pokemon_Dataset/diancie.png',
'./Pokemon_Dataset/diggersby.png',
'./Pokemon_Dataset/diglett.png',
'./Pokemon_Dataset/ditto.png',
'./Pokemon_Dataset/dodrio.png         ',
'./Pokemon_Dataset/doduo.png',
'./Pokemon_Dataset/donphan.png',
'./Pokemon_Dataset/dottler.png',
'./Pokemon_Dataset/doublade.png',
'./Pokemon_Dataset/dragalge.png',
'./Pokemon_Dataset/dracovish.png',
'./Pokemon_Dataset/dracozolt.png',
'./Pokemon_Dataset/dragapult.png',
'./Pokemon_Dataset/dragonair.png',
'./Pokemon_Dataset/dragonite.png',
'./Pokemon_Dataset/drakloak.png',
'./Pokemon_Dataset/drampa.png',
'./Pokemon_Dataset/drapion.png',
'./Pokemon_Dataset/dratini.png',
'./Pokemon_Dataset/drednaw.png',
'./Pokemon_Dataset/dreepy.png',
'./Pokemon_Dataset/drifblim.png',
'./Pokemon_Dataset/drifloon.png',
'./Pokemon_Dataset/drilbur.png',
'./Pokemon_Dataset/drizzile.png',
'./Pokemon_Dataset/drowzee.png',
'./Pokemon_Dataset/druddigon.png',
'./Pokemon_Dataset/dubwool.png',
'./Pokemon_Dataset/ducklett.png',
'./Pokemon_Dataset/dugtrio.png',
'./Pokemon_Dataset/dunsparce.png',
'./Pokemon_Dataset/duosion.png',
'./Pokemon_Dataset/duraludon.png',
'./Pokemon_Dataset/durant.png',
'./Pokemon_Dataset/dusclops.png',
'./Pokemon_Dataset/dusknoir.png',
'./Pokemon_Dataset/duskull.png',
'./Pokemon_Dataset/dustox.png',
'./Pokemon_Dataset/dwebble.png',
'./Pokemon_Dataset/eelektrik.png',
'./Pokemon_Dataset/eelektross.png',
'./Pokemon_Dataset/eevee.png',
'./Pokemon_Dataset/eiscue-ice.png',
'./Pokemon_Dataset/ekans.png',
'./Pokemon_Dataset/eldegoss.png',
'./Pokemon_Dataset/electabuzz.png',
'./Pokemon_Dataset/electivire.png',
'./Pokemon_Dataset/electrike.png',
'./Pokemon_Dataset/electrode.png',
'./Pokemon_Dataset/elekid.png',
'./Pokemon_Dataset/elgyem.png',
'./Pokemon_Dataset/emboar.png',
'./Pokemon_Dataset/emolga.png',
'./Pokemon_Dataset/empoleon.png',
'./Pokemon_Dataset/entei.png',
'./Pokemon_Dataset/escavalier.png',
'./Pokemon_Dataset/espurr.png',
'./Pokemon_Dataset/espeon.png',
'./Pokemon_Dataset/eternatus.png',
'./Pokemon_Dataset/excadrill.png',
'./Pokemon_Dataset/exeggcute.png',
'./Pokemon_Dataset/exeggutor.png',
'./Pokemon_Dataset/exploud.png',
'./Pokemon_Dataset/falinks.png',
'./Pokemon_Dataset/farfetchd.png',
'./Pokemon_Dataset/fearow.png',
'./Pokemon_Dataset/feebas.png',
'./Pokemon_Dataset/fennekin.png',
'./Pokemon_Dataset/feraligatr.png',
'./Pokemon_Dataset/ferroseed.png',
'./Pokemon_Dataset/ferrothorn.png',
'./Pokemon_Dataset/finneon.png',
'./Pokemon_Dataset/flaaffy.png',
'./Pokemon_Dataset/flabebe-red.png',
'./Pokemon_Dataset/flapple.png',
'./Pokemon_Dataset/flareon.png',
'./Pokemon_Dataset/fletchinder.png',
'./Pokemon_Dataset/fletchling.png',
'./Pokemon_Dataset/floatzel.png',
'./Pokemon_Dataset/floette.png',
'./Pokemon_Dataset/florges.png',
'./Pokemon_Dataset/flygon.png',
'./Pokemon_Dataset/fomantis.png',
'./Pokemon_Dataset/foongus.png',
'./Pokemon_Dataset/forretress.png',
'./Pokemon_Dataset/fraxure.png',
'./Pokemon_Dataset/frillish.png',
'./Pokemon_Dataset/froakie.png',
'./Pokemon_Dataset/frogadier.png',
'./Pokemon_Dataset/froslass.png',
'./Pokemon_Dataset/furfrou-natural.png',
'./Pokemon_Dataset/furret.png',
'./Pokemon_Dataset/gabite.png',
'./Pokemon_Dataset/gallade.png',
'./Pokemon_Dataset/galvantula.png',
'./Pokemon_Dataset/garbodor.png',
'./Pokemon_Dataset/garchomp.png',
'./Pokemon_Dataset/gardevoir.png',
'./Pokemon_Dataset/gastly.png',
'./Pokemon_Dataset/gastrodon-west.png',
'./Pokemon_Dataset/genesect.png',
'./Pokemon_Dataset/gengar.png',
'./Pokemon_Dataset/geodude.png',
'./Pokemon_Dataset/gible.png',
'./Pokemon_Dataset/gigalith.png',
'./Pokemon_Dataset/girafarig.png',
'./Pokemon_Dataset/giratina-altered.png',
'./Pokemon_Dataset/glaceon.png',
'./Pokemon_Dataset/glalie.png',
'./Pokemon_Dataset/glameow.png',
'./Pokemon_Dataset/gligar.png',
'./Pokemon_Dataset/gliscor.png',
'./Pokemon_Dataset/gloom.png',
'./Pokemon_Dataset/gogoat.png',
'./Pokemon_Dataset/golett.png',
'./Pokemon_Dataset/golem.png',
'./Pokemon_Dataset/golisopod.png',
'./Pokemon_Dataset/golurk.png',
'./Pokemon_Dataset/goldeen.png',
'./Pokemon_Dataset/golduck.png',
'./Pokemon_Dataset/goodra.png',
'./Pokemon_Dataset/gorebyss.png',
'./Pokemon_Dataset/gossifleur.png',
'./Pokemon_Dataset/gothita.png',
'./Pokemon_Dataset/gothitelle.png',
'./Pokemon_Dataset/gothorita.png',
'./Pokemon_Dataset/gourgeist-average.png',
'./Pokemon_Dataset/granbull.png',
'./Pokemon_Dataset/grapploct.png',
'./Pokemon_Dataset/graveler.png',
'./Pokemon_Dataset/greedent.png',
'./Pokemon_Dataset/greninja.png',
'./Pokemon_Dataset/grimer.png',
'./Pokemon_Dataset/grimmsnarl.png',
'./Pokemon_Dataset/grookey.png',
'./Pokemon_Dataset/grotle.png',
'./Pokemon_Dataset/groudon.png',
'./Pokemon_Dataset/grovyle.png',
'./Pokemon_Dataset/growlithe.png',
'./Pokemon_Dataset/grubbin.png',
'./Pokemon_Dataset/grumpig.png',
'./Pokemon_Dataset/gulpin.png',
'./Pokemon_Dataset/gumshoos.png',
'./Pokemon_Dataset/gurdurr.png',
'./Pokemon_Dataset/guzzlord.png',
'./Pokemon_Dataset/gyarados.png',
'./Pokemon_Dataset/hakamo-o.png',
'./Pokemon_Dataset/happiny.png',
'./Pokemon_Dataset/hariyama.png',
'./Pokemon_Dataset/haunter.png',
'./Pokemon_Dataset/hawlucha.png',
'./Pokemon_Dataset/haxorus.png',
'./Pokemon_Dataset/heatmor.png',
'./Pokemon_Dataset/heatran.png',
'./Pokemon_Dataset/heliolisk.png',
'./Pokemon_Dataset/helioptile.png',
'./Pokemon_Dataset/heracross.png',
'./Pokemon_Dataset/herdier.png',
'./Pokemon_Dataset/hippopotas.png',
'./Pokemon_Dataset/hippowdon.png',
'./Pokemon_Dataset/hitmonchan.png',
'./Pokemon_Dataset/hitmonlee.png',
'./Pokemon_Dataset/hitmontop.png',
'./Pokemon_Dataset/honchkrow.png',
'./Pokemon_Dataset/honedge.png',
'./Pokemon_Dataset/ho-oh.png',
'./Pokemon_Dataset/hoopa.png',
'./Pokemon_Dataset/hoppip.png',
'./Pokemon_Dataset/horsea.png',
'./Pokemon_Dataset/houndoom.png',
'./Pokemon_Dataset/houndour.png',
'./Pokemon_Dataset/huntail.png',
'./Pokemon_Dataset/hydreigon.png',
'./Pokemon_Dataset/hypno.png',
'./Pokemon_Dataset/igglybuff.png',
'./Pokemon_Dataset/illumise.png',
'./Pokemon_Dataset/impidimp.png',
'./Pokemon_Dataset/incineroar.png',
'./Pokemon_Dataset/indeedee-male.png',
'./Pokemon_Dataset/infernape.png',
'./Pokemon_Dataset/inkay.png',
'./Pokemon_Dataset/inteleon.png',
'./Pokemon_Dataset/ivysaur.png',
'./Pokemon_Dataset/jangmo-o.png',
'./Pokemon_Dataset/jellicent.png',
'./Pokemon_Dataset/jigglypuff.png',
'./Pokemon_Dataset/jirachi.png',
'./Pokemon_Dataset/joltik.png',
'./Pokemon_Dataset/jolteon.png',
'./Pokemon_Dataset/joltik.png',
'./Pokemon_Dataset/jumpluff.png',
'./Pokemon_Dataset/jynx.png',
'./Pokemon_Dataset/kabuto.png',
'./Pokemon_Dataset/kabutops.png',
'./Pokemon_Dataset/kadabra.png',
'./Pokemon_Dataset/kakuna.png',
'./Pokemon_Dataset/kangaskhan.png',
'./Pokemon_Dataset/karrablast.png',
'./Pokemon_Dataset/kartana.png',
'./Pokemon_Dataset/kecleon.png',
'./Pokemon_Dataset/keldeo-ordinary.png',
'./Pokemon_Dataset/kingdra.png',
'./Pokemon_Dataset/kingler.png',
'./Pokemon_Dataset/kirlia.png',
'./Pokemon_Dataset/klang.png',
'./Pokemon_Dataset/klefki.png',
'./Pokemon_Dataset/klink.png',
'./Pokemon_Dataset/klinklang.png',
'./Pokemon_Dataset/koffing.png',
'./Pokemon_Dataset/komala.png',
'./Pokemon_Dataset/kommo-o.png',
'./Pokemon_Dataset/krabby.png',
'./Pokemon_Dataset/kricketot.png',
'./Pokemon_Dataset/kricketune.png',
'./Pokemon_Dataset/krokorok.png',
'./Pokemon_Dataset/krookodile.png',
'./Pokemon_Dataset/kubfu.png',
'./Pokemon_Dataset/kubone.png',
'./Pokemon_Dataset/kyogre.png',
'./Pokemon_Dataset/kyurem.png',
'./Pokemon_Dataset/lairon.png',
'./Pokemon_Dataset/lampent.png',
'./Pokemon_Dataset/landorus-incarnate.png',
'./Pokemon_Dataset/lapras.png',
'./Pokemon_Dataset/lanturn.png',
'./Pokemon_Dataset/larvesta.png',
'./Pokemon_Dataset/larvitar.png',
'./Pokemon_Dataset/latias.png',
'./Pokemon_Dataset/latios.png',
'./Pokemon_Dataset/leafeon.png',
'./Pokemon_Dataset/leavanny.png',
'./Pokemon_Dataset/ledian.png',
'./Pokemon_Dataset/ledyba.png',
'./Pokemon_Dataset/lickilicky.png',
'./Pokemon_Dataset/lickitung.png',
'./Pokemon_Dataset/liepard.png',
'./Pokemon_Dataset/lileep.png',
'./Pokemon_Dataset/lilligant.png',
'./Pokemon_Dataset/lillipup.png',
'./Pokemon_Dataset/linone.png',
'./Pokemon_Dataset/litleo.png',
'./Pokemon_Dataset/litwick.png',
'./Pokemon_Dataset/lombre.png',
'./Pokemon_Dataset/lopunny.png',
'./Pokemon_Dataset/lotad.png',
'./Pokemon_Dataset/loudred.png',
'./Pokemon_Dataset/lucario.png',
'./Pokemon_Dataset/ludicolo.png',
'./Pokemon_Dataset/lugia.png',
'./Pokemon_Dataset/lumineon.png',
'./Pokemon_Dataset/lunala.png',
'./Pokemon_Dataset/lurantis.png',
'./Pokemon_Dataset/luxio.png',
'./Pokemon_Dataset/luxray.png',
'./Pokemon_Dataset/lycanroc.png',
'./Pokemon_Dataset/machamp.png',
'./Pokemon_Dataset/machoke.png',
'./Pokemon_Dataset/machop.png',
'./Pokemon_Dataset/magby.png',
'./Pokemon_Dataset/magcargo.png',
'./Pokemon_Dataset/magearna.png',
'./Pokemon_Dataset/magikarp.png',
'./Pokemon_Dataset/magmortar.png',
'./Pokemon_Dataset/magnemite.png',
'./Pokemon_Dataset/magneton.png',
'./Pokemon_Dataset/magnezone.png',
'./Pokemon_Dataset/makuhita.png',
'./Pokemon_Dataset/malamar.png',
'./Pokemon_Dataset/mamoswine.png',
'./Pokemon_Dataset/manaphy.png',
'./Pokemon_Dataset/mandibuzz.png',
'./Pokemon_Dataset/manectric.png',
'./Pokemon_Dataset/mankey.png',
'./Pokemon_Dataset/mantine.png',
'./Pokemon_Dataset/mantyke.png',
'./Pokemon_Dataset/maractus.png',
'./Pokemon_Dataset/mareanie.png',
'./Pokemon_Dataset/mareep.png',
'./Pokemon_Dataset/marill.png',
'./Pokemon_Dataset/marowak.png',
'./Pokemon_Dataset/marshadow.png',
'./Pokemon_Dataset/marshtomp.png',
'./Pokemon_Dataset/masquerain.png',
'./Pokemon_Dataset/matchoke.png',
'./Pokemon_Dataset/mawile.png',
'./Pokemon_Dataset/medicham.png',
'./Pokemon_Dataset/meditite.png',
'./Pokemon_Dataset/meganium.png',
'./Pokemon_Dataset/melmetal.png',
'./Pokemon_Dataset/meloetta-aria.png',
'./Pokemon_Dataset/meltan.png',
'./Pokemon_Dataset/meowstic-male.png',
'./Pokemon_Dataset/meowth.png',
'./Pokemon_Dataset/mesprit.png',
'./Pokemon_Dataset/metagross.png',
'./Pokemon_Dataset/metang.png',
'./Pokemon_Dataset/metapod.png',
'./Pokemon_Dataset/mewtwo.png',
'./Pokemon_Dataset/mienfoo.png',
'./Pokemon_Dataset/mightyena.png',
'./Pokemon_Dataset/milotic.png',
'./Pokemon_Dataset/miltank.png',
'./Pokemon_Dataset/mimikyu-disguised.png',
'./Pokemon_Dataset/minccino.png',
'./Pokemon_Dataset/minun.png',
'./Pokemon_Dataset/minior-red-meteor.png',
'./Pokemon_Dataset/misdreavous.png',
'./Pokemon_Dataset/moltres.png',
'./Pokemon_Dataset/morgrem.png',
'./Pokemon_Dataset/morpeko.png',
'./Pokemon_Dataset/mothim.png',
'./Pokemon_Dataset/mr.mime.png',
'./Pokemon_Dataset/mr.rime.png',
'./Pokemon_Dataset/mudbray.png',
'./Pokemon_Dataset/mudkip.png',
'./Pokemon_Dataset/mudsdale.png',
'./Pokemon_Dataset/muk.png',
'./Pokemon_Dataset/munchlax.png',
'./Pokemon_Dataset/murkrow.png',
'./Pokemon_Dataset/musharna.png',
'./Pokemon_Dataset/naganadel.png',
'./Pokemon_Dataset/natu.png',
'./Pokemon_Dataset/ninetales.png',
'./Pokemon_Dataset/ninjask.png',
'./Pokemon_Dataset/nincada.png',
'./Pokemon_Dataset/noctowl.png',
'./Pokemon_Dataset/noivern.png',
'./Pokemon_Dataset/noivern.png',
'./Pokemon_Dataset/nosepass.png',
'./Pokemon_Dataset/numel.png',
'./Pokemon_Dataset/nuzleaf.png',
'./Pokemon_Dataset/obstagoon.png',
'./Pokemon_Dataset/octillery.png',
'./Pokemon_Dataset/oddish.png',
'./Pokemon_Dataset/omanyte.png',
'./Pokemon_Dataset/omastar.png',
'./Pokemon_Dataset/onix.png',
'./Pokemon_Dataset/oshawott.png',
'./Pokemon_Dataset/otozo.png',
'./Pokemon_Dataset/pachirisu.png',
'./Pokemon_Dataset/padove.png',
'./Pokemon_Dataset/palpitoad.png',
'./Pokemon_Dataset/pancham.png',
'./Pokemon_Dataset/pangoro.png',
'./Pokemon_Dataset/pansage.png',
'./Pokemon_Dataset/pansear.png',
'./Pokemon_Dataset/panspaw.png',
'./Pokemon_Dataset/papillon.png',
'./Pokemon_Dataset/paraboom.png',
'./Pokemon_Dataset/patrat.png',
'./Pokemon_Dataset/pawniard.png',
'./Pokemon_Dataset/persian.png',
'./Pokemon_Dataset/pidgeot.png',
'./Pokemon_Dataset/pidgeotto.png',
'./Pokemon_Dataset/pidgey.png',
'./Pokemon_Dataset/pidove.png',
'./Pokemon_Dataset/pikachu.png',
'./Pokemon_Dataset/piloswine.png',
'./Pokemon_Dataset/pineco.png',
'./Pokemon_Dataset/piplup.png',
'./Pokemon_Dataset/pirouette.png',
'./Pokemon_Dataset/plusle.png',
'./Pokemon_Dataset/politoed.png',
'./Pokemon_Dataset/poliwag.png',
'./Pokemon_Dataset/poliwhirl.png',
'./Pokemon_Dataset/poliwrath.png',
'./Pokemon_Dataset/porygon.png',
'./Pokemon_Dataset/porygon-z.png',
'./Pokemon_Dataset/porygon2.png',
'./Pokemon_Dataset/primarina.png',
'./Pokemon_Dataset/primeape.png',
'./Pokemon_Dataset/prinplup.png',
'./Pokemon_Dataset/probo-pass.png',
'./Pokemon_Dataset/probopass.png',
'./Pokemon_Dataset/purrloin.png',
'./Pokemon_Dataset/purugly.png',
'./Pokemon_Dataset/quagsire.png',
'./Pokemon_Dataset/quilladin.png',
'./Pokemon_Dataset/quillfish.png',
'./Pokemon_Dataset/raboot.png',
'./Pokemon_Dataset/radican.png',
'./Pokemon_Dataset/rattata.png',
'./Pokemon_Dataset/ratticate.png',
'./Pokemon_Dataset/raichu.png',
'./Pokemon_Dataset/ralts.png',
'./Pokemon_Dataset/rammoth.png',
'./Pokemon_Dataset/ramoloss.png',
'./Pokemon_Dataset/rayquaza.png',
'./Pokemon_Dataset/regice.png',
'./Pokemon_Dataset/regidrago.png',
'./Pokemon_Dataset/regieleki.png',
'./Pokemon_Dataset/regirock.png',
'./Pokemon_Dataset/registeel.png',
'./Pokemon_Dataset/relicanth.png',
'./Pokemon_Dataset/remoray.png',
'./Pokemon_Dataset/renegade.png',
'./Pokemon_Dataset/rhyhorn.png',
'./Pokemon_Dataset/rhydon.png',
'./Pokemon_Dataset/rhyperior.png',
'./Pokemon_Dataset/roserade.png',
'./Pokemon_Dataset/roselia.png',
'./Pokemon_Dataset/rufflet.png',
'./Pokemon_Dataset/rugged.png',
'./Pokemon_Dataset/sableye.png',
'./Pokemon_Dataset/sandaconda.png',
'./Pokemon_Dataset/sandshrew.png',
'./Pokemon_Dataset/sandslash.png',
'./Pokemon_Dataset/sandswim.png',
'./Pokemon_Dataset/sawsbuck.png',
'./Pokemon_Dataset/scizor.png',
'./Pokemon_Dataset/scrafty.png',
'./Pokemon_Dataset/scraggy.png',
'./Pokemon_Dataset/scyther.png',
'./Pokemon_Dataset/seaking.png',
'./Pokemon_Dataset/sealeo.png',
'./Pokemon_Dataset/seaking.png',
'./Pokemon_Dataset/seedot.png',
'./Pokemon_Dataset/seel.png',
'./Pokemon_Dataset/sentret.png',
'./Pokemon_Dataset/serperior.png',
'./Pokemon_Dataset/shellder.png',
'./Pokemon_Dataset/shelmet.png',
'./Pokemon_Dataset/shelmet.png',
'./Pokemon_Dataset/shedinja.png',
'./Pokemon_Dataset/shinx.png',
'./Pokemon_Dataset/shroomish.png',
'./Pokemon_Dataset/shuckle.png',
'./Pokemon_Dataset/sigilyph.png',
'./Pokemon_Dataset/silicobra.png',
'./Pokemon_Dataset/silcoon.png',
'./Pokemon_Dataset/silvally.png',
'./Pokemon_Dataset/sinistea.png',
'./Pokemon_Dataset/sitaddle.png',
'./Pokemon_Dataset/sitrit.png',
'./Pokemon_Dataset/sixthteen.png',
'./Pokemon_Dataset/skarmory.png',
'./Pokemon_Dataset/skiddo.png',
'./Pokemon_Dataset/skitty.png',
'./Pokemon_Dataset/skorupi.png',
'./Pokemon_Dataset/skrelp.png',
'./Pokemon_Dataset/skuntank.png',
'./Pokemon_Dataset/slaking.png',
'./Pokemon_Dataset/slakoth.png',
'./Pokemon_Dataset/sliggoo.png',
'./Pokemon_Dataset/slurpuff.png',
'./Pokemon_Dataset/smarowak.png',
'./Pokemon_Dataset/smeragle.png',
'./Pokemon_Dataset/smoochum.png',
'./Pokemon_Dataset/sobble.png',
'./Pokemon_Dataset/soccer.png',
'./Pokemon_Dataset/solgaleo.png',
'./Pokemon_Dataset/solrock.png',
'./Pokemon_Dataset/sora.png',
'./Pokemon_Dataset/spheal.png',
'./Pokemon_Dataset/spinarak.png',
'./Pokemon_Dataset/spinda.png',
'./Pokemon_Dataset/spiritomb.png',
'./Pokemon_Dataset/splinter.png',
'./Pokemon_Dataset/spoink.png',
'./Pokemon_Dataset/squabit.png',
'./Pokemon_Dataset/squirtle.png',
'./Pokemon_Dataset/steenee.png',
'./Pokemon_Dataset/steelix.png',
'./Pokemon_Dataset/steven.png',
'./Pokemon_Dataset/stoutland.png',
'./Pokemon_Dataset/stunfisk.png',
'./Pokemon_Dataset/sudowoodo.png',
'./Pokemon_Dataset/suicune.png',
'./Pokemon_Dataset/sunkern.png',
'./Pokemon_Dataset/sunflora.png',
'./Pokemon_Dataset/surskit.png',
'./Pokemon_Dataset/swinub.png',
'./Pokemon_Dataset/swoobat.png',
'./Pokemon_Dataset/sylveon.png',
'./Pokemon_Dataset/synergetic.png',
'./Pokemon_Dataset/tangela.png',
'./Pokemon_Dataset/tangrowth.png',
'./Pokemon_Dataset/tarous.png',
'./Pokemon_Dataset/teddiursa.png',
'./Pokemon_Dataset/tentacool.png',
'./Pokemon_Dataset/tentacruel.png',
'./Pokemon_Dataset/terrakion.png',
'./Pokemon_Dataset/throh.png',
'./Pokemon_Dataset/togekiss.png',
'./Pokemon_Dataset/togepi.png',
'./Pokemon_Dataset/togetic.png',
'./Pokemon_Dataset/torterra.png',
'./Pokemon_Dataset/totodile.png',
'./Pokemon_Dataset/tranquill.png',
'./Pokemon_Dataset/trapinch.png',
'./Pokemon_Dataset/trubbish.png',
'./Pokemon_Dataset/turtwig.png',
'./Pokemon_Dataset/two-headed.png',
'./Pokemon_Dataset/twirl.png',
'./Pokemon_Dataset/typhlosion.png',
'./Pokemon_Dataset/tyranitar.png',
'./Pokemon_Dataset/tyrantrum.png',
'./Pokemon_Dataset/tyrantrum.png',
'./Pokemon_Dataset/umbreon.png',
'./Pokemon_Dataset/unown.png',
'./Pokemon_Dataset/ursaring.png',
'./Pokemon_Dataset/vanillite.png',
'./Pokemon_Dataset/vanillish.png',
'./Pokemon_Dataset/vanilluxe.png',
'./Pokemon_Dataset/vaporeon.png',
'./Pokemon_Dataset/venipede.png',
'./Pokemon_Dataset/venomoth.png',
'./Pokemon_Dataset/venosaur.png',
'./Pokemon_Dataset/vileplume.png',
'./Pokemon_Dataset/vivillon.png',
'./Pokemon_Dataset/vullaby.png',
'./Pokemon_Dataset/wailmer.png',
'./Pokemon_Dataset/wailord.png',
'./Pokemon_Dataset/waifu.png',
'./Pokemon_Dataset/walken.png',
'./Pokemon_Dataset/walrein.png',
'./Pokemon_Dataset/warra.png',
'./Pokemon_Dataset/whimsicott.png',
'./Pokemon_Dataset/whirlipede.png',
'./Pokemon_Dataset/whiscash.png',
'./Pokemon_Dataset/wigglytuff.png',
'./Pokemon_Dataset/wimpod.png',
'./Pokemon_Dataset/wishiwashi.png',
'./Pokemon_Dataset/wobbuffet.png',
'./Pokemon_Dataset/wormadam.png',
'./Pokemon_Dataset/xatu.png',
'./Pokemon_Dataset/yamask.png',
'./Pokemon_Dataset/yamper.png',
'./Pokemon_Dataset/yarn.png',
'./Pokemon_Dataset/yveltal.png',
'./Pokemon_Dataset/zamazenta-hero.png',
'./Pokemon_Dataset/zacian-hero.png',
'./Pokemon_Dataset/zangoose.png',
'./Pokemon_Dataset/zapdos.png',
'./Pokemon_Dataset/zarude.png',
'./Pokemon_Dataset/zebstryka.png',
'./Pokemon_Dataset/zeraora.png',
'./Pokemon_Dataset/zigzagoon.png',
'./Pokemon_Dataset/zoroark.png',
'./Pokemon_Dataset/zorua.png',
'./Pokemon_Dataset/zubat.png',
'./Pokemon_Dataset/zweilous.png',
'./Pokemon_Dataset/zygarde.png',
]
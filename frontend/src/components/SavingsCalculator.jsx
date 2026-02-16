import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp } from 'lucide-react';

const SavingsCalculator = () => {
  const [trips, setTrips] = useState(20);
  const [distance, setDistance] = useState(50);

  // Calculs
  const monthlyTrips = trips;
  const totalKm = trips * distance;
  const timeManual = (trips * 5) / 60; // 5min par trajet manuellement
  const timeKilom = 5 / 60; // 5min total avec KILOM
  const timeSaved = timeManual - timeKilom;
  const yearlyTimeSaved = timeSaved * 12;

  // Barème IK 2025 (approximatif)
  const kmRate = 0.523; // Pour 5 CV
  const monthlyAmount = totalKm * kmRate;
  const yearlyAmount = monthlyAmount * 12;

  return (
    <section className="relative py-40 md:py-48 bg-[#0D0D0E] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-gold/30 mb-6"
          >
            <Calculator className="w-4 h-4 text-gold" />
            <span className="font-body text-sm text-gold">Calculateur ROI</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl text-white mb-6"
          >
            Estimez vos
            <br />
            <span className="text-gold">économies</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-lg text-white/70 max-w-2xl mx-auto"
          >
            Calculez combien de temps et d'argent vous allez gagner avec KILOM
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Inputs */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-effect rounded-3xl p-8 md:p-10 border border-white/10"
            >
              <h3 className="font-heading text-2xl text-white mb-8">
                Vos déplacements
              </h3>

              {/* Trips Slider */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <label className="font-body text-sm text-white/80">
                    Nombre de trajets / mois
                  </label>
                  <div className="font-heading text-2xl text-gold">
                    {trips}
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={trips}
                  onChange={(e) => setTrips(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-gold"
                  style={{
                    background: `linear-gradient(to right, #F1C086 0%, #F1C086 ${trips}%, rgba(255,255,255,0.1) ${trips}%, rgba(255,255,255,0.1) 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-white/40 mt-2">
                  <span>1</span>
                  <span>100</span>
                </div>
              </div>

              {/* Distance Slider */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="font-body text-sm text-white/80">
                    Distance moyenne / trajet (km)
                  </label>
                  <div className="font-heading text-2xl text-gold">
                    {distance}
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="500"
                  value={distance}
                  onChange={(e) => setDistance(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-gold"
                  style={{
                    background: `linear-gradient(to right, #F1C086 0%, #F1C086 ${distance/5}%, rgba(255,255,255,0.1) ${distance/5}%, rgba(255,255,255,0.1) 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-white/40 mt-2">
                  <span>1 km</span>
                  <span>500 km</span>
                </div>
              </div>

              {/* Monthly Stats */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="font-body text-sm text-white/60 mb-3">
                  Par mois
                </div>
                <div className="font-heading text-3xl text-white">
                  {totalKm.toLocaleString()} km
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Time Saved Card */}
              <div className="glass-effect rounded-3xl p-8 border border-gold/30 glow-gold">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-body text-sm text-white/60 mb-2">
                      Temps gagné par an
                    </div>
                    <div className="font-heading text-4xl md:text-5xl text-gold mb-1">
                      {yearlyTimeSaved.toFixed(0)}h
                    </div>
                    <div className="font-body text-xs text-white/40">
                      Soit {timeSaved.toFixed(1)}h/mois
                    </div>
                  </div>
                  <div className="bg-gold/10 w-14 h-14 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-gold" />
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="font-body text-xs text-white/50">
                    Fini la saisie manuelle de {timeManual.toFixed(1)}h/mois !
                  </div>
                </div>
              </div>

              {/* Money Card */}
              <div className="glass-effect rounded-3xl p-8 border border-white/10">
                <div className="font-body text-sm text-white/60 mb-2">
                  Indemnités annuelles
                </div>
                <div className="font-heading text-4xl md:text-5xl text-white mb-1">
                  {yearlyAmount.toLocaleString('fr-FR', { maximumFractionDigits: 0 })} €
                </div>
                <div className="font-body text-xs text-white/40">
                  Soit {monthlyAmount.toLocaleString('fr-FR', { maximumFractionDigits: 0 })} €/mois
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-body text-white/60">Distance annuelle</span>
                    <span className="font-body text-white">{(totalKm * 12).toLocaleString()} km</span>
                  </div>
                </div>
              </div>

              {/* ROI Card */}
              <div className="glass-effect rounded-3xl p-8 border border-gold/50 bg-gold/5">
                <div className="font-body text-sm text-white/60 mb-2">
                  ROI de KILOM
                </div>
                <div className="font-heading text-3xl text-gold mb-3">
                  Immédiat
                </div>
                <div className="font-body text-sm text-white/70 leading-relaxed">
                  Pour seulement <span className="text-gold font-semibold">89€/an</span>, 
                  économisez <span className="text-gold font-semibold">{yearlyTimeSaved.toFixed(0)}h</span> et 
                  ne perdez plus aucun euro de déductions fiscales.
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href="#pricing"
                className="btn-gold w-full py-4 rounded-xl font-body font-semibold text-base flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Commencer maintenant
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;

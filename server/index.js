const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/repurpose', (req, res) => {
    const { SOURCE_CONTENT, TARGET_AUDIENCE, BRAND_VOICE, PRIMARY_GOAL } = req.body;

    if (!SOURCE_CONTENT) {
        return res.status(400).json({ error: 'SOURCE_CONTENT is required' });
    }

    console.log(`Processing content for ${TARGET_AUDIENCE} with ${BRAND_VOICE} tone...`);

    // Target Dynamic Prompt Template
    const systemInstruction = `Extract insights from ${SOURCE_CONTENT} for a ${TARGET_AUDIENCE} using a ${BRAND_VOICE} tone.`;
    console.log('Final Prompt:', systemInstruction);

    // This simulates the LLM processing the b2b-repurpose.md logic based on the above instruction

    const generateDynamicOutput = () => {
        const contentLower = SOURCE_CONTENT.toLowerCase();

        // Phase 1: Domain Mapping
        let domain = 'General Business';
        let vocab = {
            unit: 'growth',
            metric: 'ROI',
            process: 'workflow',
            mechanism: 'strategic shift',
            bleed: 'inefficiency',
            visual: 'Modern office setting'
        };

        if (contentLower.includes('trucking') || contentLower.includes('logistics') || contentLower.includes('shipping') || contentLower.includes('factory') || contentLower.includes('vibration')) {
            domain = 'Physical/Industrial';
            vocab = {
                unit: 'throughput',
                metric: 'OEE',
                process: 'asset uptime',
                mechanism: 'vibration sensors',
                bleed: '$50k/hr downtime loss',
                visual: 'Factory floor with heavy machinery and industrial sensors'
            };
        } else if (contentLower.includes('agri') || contentLower.includes('soil') || contentLower.includes('farm') || contentLower.includes('microbial')) {
            domain = 'Biological/AgTech';
            vocab = {
                unit: 'yield',
                metric: 'input costs',
                process: 'soil nutrient cycle',
                mechanism: 'Bacillus microbes',
                bleed: 'microbial depletion leading to yield collapse',
                visual: 'Lush farm fields with close-up of healthy soil structure'
            };
        }

        const mainSubject = SOURCE_CONTENT.split(' ').slice(0, 5).join(' ') + '...';

        return {
            analysis: {
                domain_detected: domain,
                the_bleed: vocab.bleed,
                the_mechanism: vocab.mechanism,
                the_roi: `30% increase in ${vocab.unit} and 15% reduction in ${vocab.metric}`
            },
            linkedin_post: `[THE COST OF INACTION]\n\nEvery hour you wait, you are bleeding ${vocab.bleed}. \n\nMost ${TARGET_AUDIENCE} treat this as a "cost of doing business." It isn't. It's an engineering failure in your ${vocab.process}.\n\nThe reason? You're ignoring the technical mechanism behind ${mainSubject}.\n\nHere is how we fixed it using ${vocab.mechanism}:\n\n1. Stop the bleed. Identify the specific point where ${vocab.unit} drops.\n2. Deploy the mechanism. ${vocab.mechanism} provides the data layer most operators miss.\n3. Capture the ROI. We're seeing a 30% jump in ${vocab.unit} across the board.\n\nAre you managing by intuition, or are you managing by the technical reality of your ${domain} operation? Let's discuss.`,
            twitter_thread: [
                `Your ${domain} operation is hemorrhaging $ and you might not even see it. \n\nI just broke down why ${mainSubject} is the key to stopping the bleed. \n\nA technical deep-dive: 🧵`,
                `1/ The Bleed: \n\nMost operators lose the equivalent of ${vocab.bleed} because they lack real-time visibility into ${vocab.process}. \n\nYou can't manage what you can't measure.`,
                `2/ The Fact-Stack: \n- 15% reduction in ${vocab.metric}.\n- 30% increase in ${vocab.unit}.\n\nThese aren't "goals." They are the baseline outcomes of deploying ${vocab.mechanism}.`,
                `3/ The Mechanism: \n\nBy implementing ${vocab.mechanism}, you move from reactive maintenance to proactive ${vocab.unit} optimization. \n\nIt's the difference between a crisis and a predictable P&L.`,
                `Stopping the bleed is an engineering challenge, not a management one. \n\nFollow for more tactical ${BRAND_VOICE} insights for ${domain} leaders. 🛡️`
            ],
            video_script: {
                hook_visual: `[Visual: ${vocab.visual}. Text overlay: "STOP THE ${vocab.bleed.split(' ').slice(-1)[0].toUpperCase()}"]`,
                script_body: `"You're losing $ every hour your ${vocab.process} is unmonitored. That's not a guess—it's the bleed.\"\n\n\"For ${TARGET_AUDIENCE}, the problem isn't effort. It's the invisible depletion of ${vocab.unit}.\"\n\n\"The solution? ${vocab.mechanism}. It's the mechanism that turns a $50k loss into a 30% ROI.\"\n\n\"Stop paying the cost of inaction. Start deploying the data.\"\n\n[Visual: Screen fades to black: 30% INCREASE IN ${vocab.unit.toUpperCase()}]`
            }
        };
    };

    const output = generateDynamicOutput();

    // Simulate network latency
    setTimeout(() => {
        res.json(output);
    }, 1500);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

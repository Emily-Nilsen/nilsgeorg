import {
  scriptAscent,
  scriptDescent,
  scriptUnitsPerEm,
  scriptWords,
} from '../assets/script-words';

// The surrounding text now uses Jost, tuned to Futura PT's metrics
// (ascent 0.982em, descent 0.300em). Raising the outlines by half the
// difference from Nautica's metrics puts the baseline where it was.
const baselineShift =
  ((0.982 - 0.3) - (scriptAscent - scriptDescent) / scriptUnitsPerEm) / 2;

// The holder is lifted this far off the baseline: with tight leading (e.g.
// leading-5 on 3rem text) the baseline falls below the line box, and a holder
// sitting on it would make the line taller. The outlines are moved back down
// by the same amount.
const holderLift = 0.4;

export default function ScriptTitle({ text }) {
  const word = scriptWords[text];
  if (!word) return text;

  const em = (units) => `${units / scriptUnitsPerEm}em`;

  return (
    <>
      <span className="sr-only">{text}</span>
      {/* Zero height, like a line of text: the outlines overflow it instead
          of making the line taller. */}
      <span
        aria-hidden="true"
        className="relative inline-block h-0"
        style={{ width: em(word.advance), verticalAlign: `${holderLift}em` }}
      >
        <svg
          viewBox={`0 ${word.top} ${word.advance} ${word.bottom - word.top}`}
          width={em(word.advance)}
          height={em(word.bottom - word.top)}
          fill="currentColor"
          className="absolute left-0 overflow-visible"
          style={{
            bottom: `${
              baselineShift - holderLift - word.bottom / scriptUnitsPerEm
            }em`,
          }}
        >
          <path d={word.d} />
        </svg>
      </span>
    </>
  );
}

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Quotes = ({ num_quotes }) => {
  const quote_records = useStaticQuery(graphql`
    query AllQuotes {
      allQuotesYaml {
        nodes {
          id
          quote
          author_givenname
          author_surname
        }
      }
    }
  `).allQuotesYaml.nodes;

  const total = quote_records.length;


  var old_indices = new Set([]);
  var quotes = [];
  for (var i=0; i<Math.min(num_quotes, total); i++) {
    do {
      var index = Math.floor(Math.random() * total);
    } while (old_indices.has(index));
    old_indices.add(index);
    var split_quote = quote_records[index].quote.split(/''/);
    var quote = split_quote.reduce((out, v, i) => {
      if (i % 2 === 0)
        return <>{out}{ v }</>
      else
        return <>{out}<q>{ v }</q></>
    });
    quotes.push(
        <figure key={quote_records[index].id}>
         <blockquote><q>{ quote }</q></blockquote>
         <figcaption>&mdash;{quote_records[index].author_givenname}{` `}
           {quote_records[index].author_surname}
         </figcaption>
        </figure>
       );

    console.log(quote)
  }

  return quotes;
}

Quotes.defaultProps = {
  num_quotes: 1,
}

Quotes.propTypes = {
  num_quotes: PropTypes.number,
}

export default Quotes

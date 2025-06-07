// Array of hymn objects, each with a title and lyrics
const hymns = [
    {
        title: " Hymn 1. All Hail the Power of Jesus' Name",
        lyrics: `1
All hail the pow’r of Jesus’ name!
Let angels prostrate fall,
Let angels prostrate fall;
Bring forth the royal diadem,
And crown Him, crown Him,
Crown Him, crown Him;
And crown Him Lord of all!

2
Ye chosen seed of Israel’s race,
Ye ransomed from the fall,
Ye ransomed from the fall,
Hail Him who saves you by His grace,

3
Sinners, whose love can ne’er forget
The wormwood and the gall,
The wormwood and the gall,
Go, spread your trophies at His feet,

4
Let every kindred, every tribe,
On this terrestrial ball,
On this terrestrial ball,
To Him all majesty ascribe,

5
O that with yonder sacred throng
We at His feet may fall,
We at His feet may fall!
We’ll join the everlasting song`
    },
    {
        title: "Hymn 2. Praise Him! Praise Him!",
        lyrics: `1
Praise Him! praise Him! Jesus, our blessed Redeemer!
  Sing, ye saints! His wonderful love proclaim!
Hail Him! hail Him! mightiest angels in glory;
  Strength and honor give to His holy name!
Like a shepherd, Jesus will feed His people,
  In His arms He carries them all day long;
O ye saints that live in the light of His presence,
  Praise Him! praise Him! ever in joyful song!

2
Praise Him! praise Him! Jesus, our blessed Redeemer,
  For our sins He suffered and bled and died;
He, our Rock, our Hope of eternal salvation,
  Hail Him! hail Him! Jesus, the Crucified;
Loving Savior, meekly enduring sorrow,
  Crowned with thorns that cruelly pierced His brow;
Once for us rejected, despised, and forsaken,
  Prince of Glory, ever triumphant now.

3
Praise Him! praise Him! Jesus, our blessed Redeemer,
  Heavenly portals, loud with hosannahs ring!
Jesus, Savior, reigneth for ever and ever;
  Crown Him! crown Him! Prophet and Priest and King!
Death is vanquished! Tell it with joy, ye faithful,
  Where is now thy victory, boasting grave?
Jesus lives! No longer thy portals are cheerless;
  Jesus lives, the mighty and strong to save.` 
    },
    {
        title: "Hymn 3. I Love to Tell the Story",
        lyrics: `1
I love to tell the story
  Of unseen things above,
Of Jesus and His glory,
  Of Jesus and His love.
I love to tell the story,
  Because I know ’tis true;
It satisfies my longings
  As nothing else can do.
 
I love to tell the story,
’Twill be my theme in glory
To tell the old, old story
  of Jesus and His love.
2
I love to tell the story;
  More wonderful it seems
Than all the golden fancies
  Of all my golden dreams,
I love to tell the story,
  It did so much for me;
And that is just the reason
  I tell it now to thee.
3
I love to tell the story;
  ’Tis pleasant to repeat
What seems each time I tell it,
  More wonderfully sweet.
I love to tell the story;
  For some have never heard
The message of salvation
  From God’s own holy Word.
4
I love to tell the story;
  For those who know it best
Seem hungering and thirsting
  To hear it like the rest.
And when, in scenes of glory,
  I sing the new, new song,
’Twill be the old, old story,
  That I have loved so long.`
    },
    {
        title: "Hymn 4. We're Marching to Zion",
        lyrics: `1
Come, we that love the Lord,
  And let our joys be known;
Join in a song of sweet accord,
  And thus surround the throne.

2
The sorrows of the mind
  Be banished from the place!
Religion never was designed
  To make our pleasures less.

3
Let us share our joys,
  And let us share our woes;
We are a family of love,
  And we should love each other.

4
We're marching to Zion,
  Beautiful, beautiful Zion;
We're marching upward to Zion,
  The beautiful city of God.`
    },
    {
        title: "Hymn 5. I Will Sing the Wondrous Story",
        lyrics: `1
I will sing the wondrous story
  Of the Christ who died for me,
How He left His home in glory
  For the cross of Calvary.

2
Yes, I'll sing the wondrous story
  Of the Christ who died for me,
Sing it with the saints in glory,
  Gathered by the crystal sea.

3
I was lost, but Jesus found me,
  Found the sheep that went astray;
Through His loving arms around me,
  Drew me back into His way.

4
Yes, I'll sing the wondrous story
  Of the Christ who died for me,
Sing it with the saints in glory,
  Gathered by the crystal sea.`
    },
    // Dummy hymns for demonstration up to 15
    {
        title: "Hymn 6. Amazing Grace",
        lyrics: `1
Amazing grace! how sweet the sound,
That saved a wretch like me!
I once was lost, but now am found,
Was blind, but now I see.

2
'Twas grace that taught my heart to fear,
And grace my fears relieved;
How precious did that grace appear
The hour I first believed!`
    },
    {
        title: "Hymn 7. Blessed Assurance",
        lyrics: `1
Blessed assurance, Jesus is mine!
Oh, what a foretaste of glory divine!
Heir of salvation, purchase of God,
Born of His Spirit, washed in His blood.

2
This is my story, this is my song,
Praising my Savior all the day long;
This is my story, this is my song,
Praising my Savior all the day long.`
    },
    {
        title: "Hymn 8. To God Be the Glory",
        lyrics: `1
To God be the glory, great things He hath done!
So loved He the world that He gave us His Son,
Who yielded His life an atonement for sin,
And opened the life gate that all may go in.

2
Praise the Lord, praise the Lord,
Let the earth hear His voice!
Praise the Lord, praise the Lord,
Let the people rejoice!`
    },
    {
        title: "Hymn 9. Holy, Holy, Holy",
        lyrics: `1
Holy, holy, holy! Lord God Almighty!
Early in the morning our song shall rise to Thee;
Holy, holy, holy! merciful and mighty!
God in three Persons, blessed Trinity!`
    },
    {
        title: "Hymn 10. Rock of Ages",
        lyrics: `1
Rock of Ages, cleft for me,
Let me hide myself in Thee;
Let the water and the blood,
From Thy wounded side which flowed,
Be of sin the double cure,
Save from wrath and make me pure.`
    },
    {
        title: "Hymn 11. Great Is Thy Faithfulness",
        lyrics: `1
Great is Thy faithfulness, O God my Father,
There is no shadow of turning with Thee;
Thou changest not, Thy compassions, they fail not,
As Thou hast been Thou forever wilt be.`
    },
    {
        title: "Hymn 12. It Is Well with My Soul",
        lyrics: `1
When peace like a river, attendeth my way,
When sorrows like sea billows roll;
Whatever my lot, Thou hast taught me to say,
It is well, it is well, with my soul.`
    },
    {
        title: "Hymn 13. What a Friend We Have in Jesus",
        lyrics: `1
What a friend we have in Jesus,
All our sins and griefs to bear!
What a privilege to carry
Everything to God in prayer!`
    },
    {
        title: "Hymn 14. Jesus Paid It All",
        lyrics: `1
I hear the Savior say,
Thy strength indeed is small;
Child of weakness, watch and pray,
Find in Me thine all in all.`
    },
    {
        title: "Hymn 15. Nearer, My God, to Thee",
        lyrics: `1
Nearer, my God, to Thee,
Nearer to Thee!
E'en though it be a cross
That raiseth me.`
    },
    {
        title: "Hymn 16. Example Hymn Title",
        lyrics: `1
First verse of hymn 16.

2
Second verse of hymn 16.`
    },
    {
        title: "Hymn 17. Example Hymn Title",
        lyrics: `1
First verse of hymn 17.

2
Second verse of hymn 17.`
    },
    {
        title: "Hymn 18. Example Hymn Title",
        lyrics: `1
First verse of hymn 18.

2
Second verse of hymn 18.`
    },
    {
        title: "Hymn 19. Example Hymn Title",
        lyrics: `1
First verse of hymn 19.

2
Second verse of hymn 19.`
    },
    {
        title: "Hymn 20. Example Hymn Title",
        lyrics: `1
First verse of hymn 20.

2
Second verse of hymn 20.`
    },
    {
        title: "Hymn 21. Example Hymn Title",
        lyrics: `1
First verse of hymn 21.

2
Second verse of hymn 21.`
    },
    {
        title: "Hymn 22. Example Hymn Title",
        lyrics: `1
First verse of hymn 22.

2
Second verse of hymn 22.`
    },
    {
        title: "Hymn 23. Example Hymn Title",
        lyrics: `1
First verse of hymn 23.

2
Second verse of hymn 23.`
    },
    {
        title: "Hymn 24. Example Hymn Title",
        lyrics: `1
First verse of hymn 24.

2
Second verse of hymn 24.`
    },
    {
        title: "Hymn 25. Example Hymn Title",
        lyrics: `1
First verse of hymn 25.

2
Second verse of hymn 25.`
    },
    {
        title: "Hymn 26. Example Hymn Title",
        lyrics: `1
First verse of hymn 26.

2
Second verse of hymn 26.`
    },
    {
        title: "Hymn 27. Example Hymn Title",
        lyrics: `1
First verse of hymn 27.

2
Second verse of hymn 27.`
    },
    {
        title: "Hymn 28. Example Hymn Title",
        lyrics: `1
First verse of hymn 28.

2
Second verse of hymn 28.`
    },
    {
        title: "Hymn 29. Example Hymn Title",
        lyrics: `1
First verse of hymn 29.

2
Second verse of hymn 29.`
    },
    {
        title: "Hymn 30. Example Hymn Title",
        lyrics: `1
First verse of hymn 30.

2
Second verse of hymn 30.`
    },
    {
        title: "Hymn 31. Example Hymn Title",
        lyrics: `1
First verse of hymn 31.

2
Second verse of hymn 31.`
    },
    {
        title: "Hymn 32. Example Hymn Title",
        lyrics: `1
First verse of hymn 32.

2
Second verse of hymn 32.`
    },
    {
        title: "Hymn 33. Example Hymn Title",
        lyrics: `1
First verse of hymn 33.

2
Second verse of hymn 33.`
    },
    {
        title: "Hymn 34. Example Hymn Title",
        lyrics: `1
First verse of hymn 34.

2
Second verse of hymn 34.`
    },
    {
        title: "Hymn 35. Example Hymn Title",
        lyrics: `1
First verse of hymn 35.

2
Second verse of hymn 35.`
    },
    {
        title: "Hymn 36. Example Hymn Title",
        lyrics: `1
First verse of hymn 36.

2
Second verse of hymn 36.`
    },
    {
        title: "Hymn 37. Example Hymn Title",
        lyrics: `1
First verse of hymn 37.

2
Second verse of hymn 37.`
    },
    {
        title: "Hymn 38. Example Hymn Title",
        lyrics: `1
First verse of hymn 38.

2
Second verse of hymn 38.`
    },
    {
        title: "Hymn 39. Example Hymn Title",
        lyrics: `1
First verse of hymn 39.

2
Second verse of hymn 39.`
    },
    {
        title: "Hymn 40. Example Hymn Title",
        lyrics: `1
First verse of hymn 40.

2
Second verse of hymn 40.`
    },
    {
        title: "Hymn 41. Example Hymn Title",
        lyrics: `1
First verse of hymn 41.

2
Second verse of hymn 41.`
    },
    {
        title: "Hymn 42. Example Hymn Title",
        lyrics: `1
First verse of hymn 42.

2
Second verse of hymn 42.`
    },
    {
        title: "Hymn 43. Example Hymn Title",
        lyrics: `1
First verse of hymn 43.

2
Second verse of hymn 43.`
    },
    {
        title: "Hymn 44. Example Hymn Title",
        lyrics: `1
First verse of hymn 44.

2
Second verse of hymn 44.`
    },
    {
        title: "Hymn 45. Example Hymn Title",
        lyrics: `1
First verse of hymn 45.

2
Second verse of hymn 45.`
    }
];

// Track which hymn is currently expanded (by index)
let expandedHymnIndex = null;

// Function to render the hymn list, optionally filtered
function renderHymnList(filteredHymns = hymns) {
    const hymnList = document.getElementById('hymn-list');
    hymnList.innerHTML = '';
    if (filteredHymns.length === 0) {
        hymnList.innerHTML = '<li style="color:#888;cursor:default;background:none;box-shadow:none;">No hymns found.</li>';
        return;
    }
    filteredHymns.forEach((hymn, i) => {
        // Find the index in the main hymns array for correct expansion
        const hymnIndex = hymns.indexOf(hymn);

        // Create the hymn title row
        const li = document.createElement('li');
        li.textContent = `${hymnIndex + 1}. ${hymn.title}`;
        li.tabIndex = 0;
        li.className = 'hymn-title-row';
        li.setAttribute('aria-expanded', expandedHymnIndex === hymnIndex);

        // Click/keyboard to expand/collapse
        li.onclick = () => toggleHymn(hymnIndex, filteredHymns);
        li.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') li.onclick();
        };
        hymnList.appendChild(li);

        // If this hymn is expanded, show its lyrics directly under it
        if (expandedHymnIndex === hymnIndex) {
            const lyricsLi = document.createElement('li');
            lyricsLi.className = 'hymn-lyrics-row';
            // Use a <div> for lyrics to apply pre-line styling
            lyricsLi.innerHTML = `
                <div id="hymn-lyrics" style="white-space:pre-line; margin: 18px 0 8px 0; text-align:left;">
                    <strong>${hymn.title}</strong>\n\n${hymn.lyrics}
                </div>
                <button class="close-hymn-btn" aria-label="Close hymn" style="margin-top:10px;">Close</button>
            `;
            // Close button to collapse
            lyricsLi.querySelector('.close-hymn-btn').onclick = () => {
                expandedHymnIndex = null;
                renderHymnList(filteredHymns);
            };
            hymnList.appendChild(lyricsLi);
        }
    });

    addTouchFeedback();
}

// Toggle expand/collapse for a hymn
function toggleHymn(index, filteredHymns) {
    if (expandedHymnIndex === index) {
        expandedHymnIndex = null;
    } else {
        expandedHymnIndex = index;
    }
    renderHymnList(filteredHymns || hymns);
}

// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

// Set the theme (dark or light)
function setTheme(mode) {
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙';
    }
    localStorage.setItem('theme', mode);
}

// Toggle between dark and light mode
function toggleTheme() {
    if (document.body.classList.contains('dark-mode')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}

themeToggle.addEventListener('click', toggleTheme);

// Initialize theme on load
if (savedTheme) {
    setTheme(savedTheme);
} else if (prefersDark) {
    setTheme('dark');
} else {
    setTheme('light');
}

// --- Search functionality ---

// Get search input and clear button elements
const searchInput = document.getElementById('search-input');
const searchClear = document.getElementById('search-clear');

// Filter hymns by query (searches both title and lyrics)
function filterHymns(query) {
    query = query.trim().toLowerCase();
    if (!query) return hymns;
    return hymns.filter(hymn =>
        hymn.title.toLowerCase().includes(query) ||
        hymn.lyrics.toLowerCase().includes(query)
    );
}

// Handle search input changes
function handleSearchInput() {
    const query = searchInput.value;
    // Always just render the list, never expand/open a hymn on search
    expandedHymnIndex = null;
    renderHymnList(filterHymns(query));
    // Show/hide clear button
    if (query.length > 0) {
        searchClear.style.opacity = '1';
        searchClear.style.pointerEvents = 'auto';
    } else {
        searchClear.style.opacity = '0';
        searchClear.style.pointerEvents = 'none';
    }
}

// Event listeners for search input and clear button
searchInput.addEventListener('input', handleSearchInput);
searchInput.addEventListener('focus', handleSearchInput);

searchClear.addEventListener('click', () => {
    searchInput.value = '';
    handleSearchInput();
    searchInput.focus();
});

// Keyboard shortcut: Ctrl+F to focus search
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'f') {
        e.preventDefault();
        searchInput.focus();
    }
});

// Render initial list on page load
renderHymnList();

function addTouchFeedback() {
    // For hymn list items
    document.querySelectorAll('.hymn-title-row').forEach(li => {
        li.addEventListener('touchstart', () => li.classList.add('touch-active'));
        li.addEventListener('touchend', () => li.classList.remove('touch-active'));
        li.addEventListener('touchcancel', () => li.classList.remove('touch-active'));
    });
    // For close buttons
    document.querySelectorAll('.close-hymn-btn').forEach(btn => {
        btn.addEventListener('touchstart', () => btn.classList.add('touch-active'));
        btn.addEventListener('touchend', () => btn.classList.remove('touch-active'));
        btn.addEventListener('touchcancel', () => btn.classList.remove('touch-active'));
    });
}
